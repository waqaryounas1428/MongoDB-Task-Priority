# MongoDB Task Priority Management System

A Node.js application demonstrating MongoDB database operations using Mongoose ODM. This project implements a Priority model for task management, showcasing CRUD operations (Create, Read, Update, Delete) on a MongoDB database.

## Features

- **Priority Model**: Manage task priorities with customizable properties
  - Name (required, 3-50 characters)
  - Icon (optional, 3-50 characters)
  - Color (optional, 7-character hex code)
- **CRUD Operations**: Full support for Create, Read, Update, and Delete operations
- **MongoDB Integration**: Connected to local MongoDB instance
- **Environment Configuration**: Uses dotenv for secure configuration management

## Prerequisites

- Node.js (v24.13.0 or higher)
- MongoDB running locally on `mongodb://localhost:27017`
- npm (Node Package Manager)

## Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create or update the `.env` file with your MongoDB connection URI:
```
DB_URI=mongodb://localhost:27017/tasksmgt38
```

## Usage

### Start the Application

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

## Project Structure

```
mongodbdemo/
├── app.js                          # Main application file
├── models/
│   └── priority.model.js          # Priority schema and model
├── .env                           # Environment variables
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## Available Scripts

- `npm start` - Run the application
- `npm run dev` - Run with nodemon (auto-reload on file changes)
- `npm test` - Run tests (not yet implemented)

## Dependencies

- **mongoose** (^9.5.0) - MongoDB object modeling
- **dotenv** (^17.4.2) - Environment variable management

## Dev Dependencies

- **nodemon** (^3.1.14) - Auto-restart development server

## Example Operations

The `app.js` file includes commented examples of:
- Creating a new priority record
- Finding priorities by ID
- Finding all priorities
- Updating a priority record
- Deleting a priority record

Uncomment the relevant code sections to test different operations.

## Author

mern38

## License

ISC
