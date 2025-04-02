# Full-Stack Template

This is a full-stack web application featuring a React (Vite) frontend and a Node.js backend. The project is structured into two main directories: `frontend` for the React application and `backend` for the Node.js server.

## Prerequisites

Before running this project, make sure you have node.js installed

## Getting Started

To get started with this project, clone the repository to your local machine:

```
git clone https://github.com/Aryan-Vora/TeachReact.git
```

## Installation

To set up the project dependencies, run the `setup` script from the root of the project:

```
npm run setup
```

This script will install all necessary dependencies for both the frontend and backend, as well as the `concurrently` package which is used to run the frontend and backend simultaneously.

## Available Scripts

In the project directory, you can run:

### `npm setup`

Installs all dependencies

### `npm start`

Runs both the frontend and backend applications concurrently. The frontend will be available at [http://localhost:3000](http://localhost:3000) and the backend at [http://localhost:5000](http://localhost:5000).

### `npm run start-frontend`

Runs only the frontend application in development mode.

### `npm run start-backend`

Runs only the backend server.

### `npm run build-frontend`

Builds the frontend application for production to the `frontend/dist` folder.

### `npm run install-frontend`

Installs the dependencies for the frontend application.

### `npm run install-backend`

Installs the dependencies for the backend application.

## Project Structure

- `/backend` - Contains the Node.js server code with RESTful API endpoints.
- `/frontend` - Contains the React application code.

## Backend API

The backend API currently has one example endpoint:

### `GET /hello`

Returns a JSON response with a `message` key, containing the string "Hello World!".
