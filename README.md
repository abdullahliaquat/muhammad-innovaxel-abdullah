# URL Shortener API

This project is a RESTful API that allows users to shorten long URLs and perform full CRUD operations on them.

## Branches

The main branch contains only this README file as required. All implementation, logic, and commits are placed in the dev branch.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variable management
- cors for handling cross-origin requests
- nodemon for development

## Features

- Accepts a long URL and returns a shortened version
- Generates a unique short code for each URL
- Stores and retrieves original URLs
- Updates or deletes existing shortened URLs
- Tracks the number of times each URL is accessed
- Provides statistics for any shortened URL
- RESTful API structure
- Modular and clean codebase

## Folder Structure (in dev branch)

The dev branch follows a clean architecture:
- controllers: Contains business logic
- routes: Defines API endpoints
- models: Contains Mongoose schemas
- utils: Contains helper utilities
- server.js: Main entry point
- .env.example: Sample environment variable file

## API Overview

POST /shorten: Creates a shortened URL

GET /shorten/:shortCode: Retrieves the original long URL

PUT /shorten/:shortCode: Updates the original URL for a given short code

DELETE /shorten/:shortCode: Deletes the shortened URL entry

GET /shorten/:shortCode/stats: Returns full statistics including access count and timestamps

## Setup Instructions

1. Clone the repository and switch to the dev branch:
   git clone -b dev https://github.com/abdullahliaquat/muhammad-innovaxel-abdullah.git

2. Navigate to the project directory:
   cd muhammad-innovaxel-abdullah

3. Install all dependencies:
   npm install

4. Create a .env file and add the following:
   MONGODB_URI=your-mongodb-uri
   PORT=5000

5. Start the server:
   npx nodemon server.js

## Testing

All endpoints were tested using Thunder Client and Postman. You can test them locally after running the server.

## Commit Structure

The dev branch includes 15 logically ordered commits covering setup, schema design, route handling, controller logic, error handling, testing, and cleanup.

## Prepared By
Muhammad Abdullah Liaquat
