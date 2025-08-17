# task-manager-frontend
Task Manager

A simple web-based Task Manager application that allows users to create, view, edit, and delete tasks. Includes user authentication and task status management.

Table of Contents

Features

Demo

Installation

Usage

Technologies

Folder Structure

Contributing

License

Features

User authentication (Signup, Login, Logout)

Create, edit, delete tasks

Mark tasks as complete or incomplete

View task details individually

Responsive and user-friendly interface

Demo

If deployed online, add your link here:
https://your-app-link.com

Installation
Prerequisites

Node.js (v18+)

npm or yarn

MongoDB (local or Atlas)

Steps
# Clone the repository
git clone https://github.com/your-username/task-manager.git

# Navigate to the project folder
cd task-manager

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Create a .env file in the backend folder with the following:
# MONGO_URI=<your_mongodb_connection_string>
# JWT_SECRET=<your_jwt_secret>

# Start the backend server
cd ../backend
npm start

# Start the frontend
cd ../frontend
npm start


The app will run at: http://localhost:3000

Usage

Signup with your name, email, and password

Login with your credentials

Create tasks with title and description

Mark tasks as complete or incomplete

Edit or delete tasks as needed

View individual task details

Technologies

Frontend: React, HTML, CSS

Backend: Node.js, Express

Database: MongoDB

Authentication: JWT

Styling: Tailwind CSS (if used)

Folder Structure
task-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

Contributing

Fork the repository

Create your feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add some feature"

Push to the branch: git push origin feature/YourFeature

Open a Pull Request

License

This project is licensed under the MIT License.
