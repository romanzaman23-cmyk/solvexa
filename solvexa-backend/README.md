# Solvexa Backend API

Node.js + Express.js backend server for Solvexa Digital Solutions.

## Features
- `POST /api/contact`: Handles contact form submissions and delivers email notifications.
- `POST /api/newsletter`: Handles newsletter subscription requests.
- `GET /api/health`: Health status endpoint.

## Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd solvexa-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` and fill in your email credentials:
   ```bash
   cp .env.example .env
   ```

4. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Server will start on `http://localhost:5000`.
