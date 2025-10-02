# Sportech 

## Backend (Express + MongoDB)

Location: `backend/`

1) Local setup

- Create `backend/.env` from `.env.example` and set:
  - `MONGODB_URI` to your MongoDB Atlas connection string
  - `FRONTEND_URL` to `http://localhost:5173` for local dev
- From `backend/` run:

```bash
npm install
npm start
```

Server runs at `http://localhost:5000`.

2) API endpoints

- POST `/api/contact` body: `{ name, email, phone, comment }`
- GET `/api/contact`
- DELETE `/api/contact/:id`

3) Deployment

- Render (free tier):
  - New Web Service -> Connect repo
  - Root directory: `backend`
  - Build command: `npm install`
  - Start command: `npm start`
  - Environment variables: `MONGODB_URI`, `FRONTEND_URL` (your Vercel URL)

## Frontend

- Configure `VITE_API_BASE_URL` in `/.env` (Vercel Project Settings -> Environment Variables)
  - Example local: `VITE_API_BASE_URL=http://localhost:5000`
  - Example prod: `VITE_API_BASE_URL=https://<your-render-service>.onrender.com`

Sportech is a **car repairing and modification workshop**.  
We provide **complete automotive care**, from routine maintenance and repairs to building **drift-ready cars** with custom modifications.  

---

## Features  
- Responsive website built with modern web technologies  
- Sections for **Home, About, Work, Contact**  
- Smooth navigation with active section highlighting  
- Gallery/Work section to showcase **car builds & drift projects**  
- Contact form for customer inquiries  

---

## 🛠️ Tech Stack  
- **Frontend:** React + Vite + TailwindCSS  
- **Backend (optional if added):** Node.js + Express.js  
- **Hosting:** Vercel  

---

## 📂 Project Structure  

```bash
sportech/
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Pages (Home, About, Work, Contact)
│   ├── assets/         # Images, logos, icons
│   ├── App.jsx         # Main App
│   └── index.css       # Global styles
│
│── public/             # Static files
│── package.json        # Dependencies
│── README.md           # Project documentation
