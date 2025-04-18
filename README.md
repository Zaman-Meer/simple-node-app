A simple Node.js backend application with health check and info endpoints.

App

## Features

- Health check endpoint (`/health`)
- System information endpoint (`/info`)
- Express.js server
- JSON response format

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development mode (with auto-reload):

```bash
npm run dev
```

### Production mode:

```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Endpoints

### Health Check

- **URL:** `/health`
- **Method:** GET
- **Response:** JSON object with status and timestamp

Example response:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### System Information

- **URL:** `/info`
- **Method:** GET
- **Response:** JSON object with system information

Example response:

```json
{
  "service": "simple-node-app",
  "version": "1.0.0",
  "nodeVersion": "v16.x.x",
  "platform": "win32",
  "hostname": "DESKTOP-XXX",
  "uptime": 123.45,
  "memoryUsage": {
    "heapTotal": 123456789,
    "heapUsed": 987654321,
    "rss": 123456789
  },
  "cpus": 8
}
```
