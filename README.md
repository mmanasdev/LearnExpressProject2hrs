# Contact Manager API

A RESTful API built with Node.js, Express, and MongoDB for managing contacts. This project is part of the "Learn Node.js & Express with Project in 2 Hours" tutorial.

## Features

- CRUD operations for contacts
- User authentication with JWT
- MongoDB database integration
- Error handling middleware
- Async/await operations
- Protected routes

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

## Prerequisites

- Node.js installed
- MongoDB Atlas account
- Thunder Client (VS Code extension) or Postman for API testing

## Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
CONNECTION_STRING=your_mongodb_connection_string
```

4. Start the server
```bash
npm run dev
```

## API Endpoints

### Contacts

- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get a single contact
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact

### Users

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/current` - Get current user

## Project Structure

```
├── config/
│   └── dbConnection.js
├── controllers/
│   └── contactController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── contactModel.js
├── routes/
│   └── contactRoutes.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Tutorial Reference

This project is based on the tutorial "Learn Node.js & Express with Project in 2 Hours" by [Tutorial Creator](https://www.youtube.com/watch?v=H9M02of22z4).

### Key Topics Covered

- Express server setup
- REST API conventions
- CRUD operations
- MongoDB integration
- Error handling
- JWT authentication
- Route protection
- User-contacts relationship

## License

This project is open source and available under the MIT License.
