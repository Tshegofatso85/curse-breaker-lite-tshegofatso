# Curse Breaker Lite

Curse Breaker Lite is a mini full-stack web application built as part of the RerosperityHome Full-Stack Developer hiring challenge.

Users can paste broken code, select the codes programming language, receive a mock diagnosis of the codes issues, and view a corrected version of the code with explanations.

## Features

- Paste broken code snippets
- Select JavaScript, Python, or HTML/CSS
- Mock AI diagnosis with:
  - Errors
  - Warnings
  - Information
- View corrected code
- Copy fixed code to clipboard
- Download fixed code (`.js`, `.py`, `.html`)
- Responsive dark developer-themed UI

## Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Tshegofatso85/curse-breaker-lite-tshegofatso.git
cd curse-breaker-lite-tshegofatso
```

### 2. Install dependencies

Install dependencies for both the client and server.

```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure and run

Create a `.env` file in the server directory using the provided `.env.example`, then start both applications.

Server:

```bash
cd server
npm run dev
```

Client:

```bash
cd client
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## 📁 Project Structure

```
curse-breaker-lite/
├── client/
│   ├── src/
│   ├── public/
│   └── ...
├── server/
│   ├── routes/
│   ├── data/
│   └── ...
└── README.md
```

## 📄 Environment Variables

A `.env.example` file has been included.

Copy the example environment files before running the project.

Client:

```bash
cp client/.env.example client/.env
```

Server:

```bash
cp server/.env.example server/.env
```

Then update the values as needed for your local or deployed environment.

No real API keys are required. This project uses mock data only.

## 👨‍💻 Author

**Tshegofatso Kgokong**
