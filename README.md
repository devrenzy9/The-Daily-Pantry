# The Daily Pantry

A grocery e-commerce project with a React frontend and an Express backend backed by local JSON storage.

## Stack

**Frontend:** React · Vite · Tailwind CSS · GSAP  
**Backend:** Express.js · JSON file storage · UUID

## Project Structure

```
THE-DAILY-PANTRY/
├── client/                 # React + Vite frontend
├── server/                 # Express backend (JSON database)
├── .gitignore
├── README.md
```

## Run Locally

```bash
npm install
npm run dev:full
```

| Command       | Server               | Client               |
|---------------|----------------------|----------------------|
| `npm run dev:full` | `http://localhost:3001` | `http://localhost:5173` |
| `npm run server`    | runs the backend        | —                      |
| `npm run dev`       | —                      | runs the frontend      |
| `npm run seed`      | seed local data       | —                      |
