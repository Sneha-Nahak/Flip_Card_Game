# Flip Card Game

This is a full-stack web application for a "Flip Card Game," built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
* [Contributing](#contributing)
* [Demo Collaborators](#demo-collaborators)


## Features


* Interactive flip card game
* User authentication 
* Score tracking
* Individual user history
* Responsive design

## Technologies Used

**Client (Frontend):**
* React.js
* Vite (for fast development server and bundling)
* HTML
* Bootstrap
* CSS
* ESLint (for code quality)

**Server (Backend):**
* Node.js
* Express.js
* MongoDB (for database)
* Mongoose (ODM for MongoDB)
* dotenv (for environment variables)

## Project Structure

The project is divided into two main parts: `client` and `server`.
```
Flip_Card_Game/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
└── server/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── node_modules/
    ├── routes/
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── server.js
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or yarn
* MongoDB installed and running, or a MongoDB Atlas account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sneha-Nahak/Flip_Card_Game.git
    cd Flip_Card_Game
    ```

2.  **Install client dependencies:**
    ```bash
    cd client
    npm install  # or yarn install
    cd ..
    ```

3.  **Install server dependencies:**
    ```bash
    cd server
    npm install  # or yarn install
    cd ..
    ```

### Running the Application

1.  **Set up environment variables:**
    * Create a `.env` file in the `client` directory and add any client-side environment variables (e.g., API base URL).
        ```
        # Example for client/.env
        VITE_API_BASE_URL=http://localhost:5000/api
        ```
    * Create a `.env` file in the `server` directory and add your server-side environment variables (e.g., MongoDB URI, port).
        ```
        # Example for server/.env
        PORT=5000
        MONGODB_URI=mongodb://localhost:27017/flipcardgame
        # Add any other sensitive keys here
        ```

2.  **Start the server:**
    ```bash
    cd server
    npm start # or node server.js
    ```
    The server should start on the port specified in your `.env` file (e.g., `http://localhost:5000`).

3.  **Start the client:**
    Open a new terminal window.
    ```bash
    cd client
    npm run dev # or yarn dev
    ```
    The React development server should start, usually on `http://localhost:5173` (Vite's default).

4.  **Access the application:**
    Open your web browser and navigate to `http://localhost:5173` (or the port where your client is running).

## Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

##  Collaborators Of This Project

This project is a collaborative effort. Here are the details of the team members:

* **[1st Collaborator]**
    * **GitHub:** [@Sneha-Nahak](https://github.com/Sneha-Nahak)
    * **Role:** Lead Frontend Developer, responsible for [specific responsibilities, e.g., UI/UX design, React component development]

* **[2nd Collaborator]**
    * **GitHub:** [@joinmygithubh](https://github.com/joinmygithubh)
    * **Role:** Backend Developer, responsible for [specific responsibilities, e.g., API development, database integration, authentication]

