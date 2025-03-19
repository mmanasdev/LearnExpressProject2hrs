const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({ _id: user.id, username: user.username, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
})

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    //Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    res.status(200).json({ token });
})

//@desc Get current user
//@route GET /api/users/current
//@access private
const getCurrentUser = asyncHandler (async (req, res) => {
    res.status(200).json(req.user);  
})

module.exports = { registerUser, loginUser, getCurrentUser };