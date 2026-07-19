# KrishiSeva

KrishiSeva is an AI-powered smart-farming advisory web application for Indian farmers. It brings crop guidance, weather information, pest support, market insights, and government-scheme information into a simple multilingual interface.

## Features

- **Krishi AI Guru** — chat-based agricultural guidance powered by Google Gemini when configured, with an offline knowledge-base fallback.
- **Weather alerts** — location-based weather information using Open-Meteo.
- **Pest detection** — crop pest and disease support through the in-app scanner experience.
- **Farm guidance** — soil health, irrigation, fertilizer, crop, market-price, and government-scheme information.
- **Multilingual interface** — English, Gujarati, and Hindi language options.
- **User accounts** — local sign-up and log-in endpoints for the demo application.
- **Responsive UI** — desktop and mobile-friendly interface, with light/dark theme support.

## Tech stack

- HTML, CSS, and vanilla JavaScript
- Node.js and Express
- Google Generative AI (Gemini)
- Open-Meteo weather API
- Vercel deployment configuration

## Getting started

### Prerequisites

- Node.js 18 or later
- npm
- A Google Gemini API key (optional; the app has a local fallback chat responder)

### Installation

```bash
git clone <your-repository-url>
cd "daksh project"
npm install
```

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

Do not commit the `.env` file or API key.

### Run locally

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

For development with automatic server restarts:

```bash
npm run dev
```

## Project structure

```text
.
├── assets/          # Backgrounds and UI imagery
├── index.html       # Main application page
├── login.html       # Login page
├── signup.html      # Registration page
├── style.css        # Application styles
├── script.js        # Client-side interactions and API calls
├── server.js        # Express server and API endpoints
├── users.json       # Local demo user data
├── package.json     # Scripts and dependencies
└── vercel.json      # Vercel deployment configuration
```

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/chat` | Sends a question to Gemini or the local agriculture knowledge base. |
| `POST` | `/api/signup` | Creates a local demo user account. |
| `POST` | `/api/login` | Authenticates a local demo user account. |

## Deployment

The repository includes `vercel.json` for Vercel. Add `GEMINI_API_KEY` in the Vercel project environment variables before deploying.

> **Demo-data note:** user records are stored in `users.json` locally. On Vercel, the application uses temporary storage, so user changes are not durable. Use a managed database and securely hashed passwords before production use.

## Security note

This project is a prototype. Before deploying it for real users, replace file-based user storage with a database, hash passwords (for example, with `bcrypt`), validate inputs, and keep all API keys in environment variables.
