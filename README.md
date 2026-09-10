# SHOP.CO Admin Dashboard

A React + Vite + Tailwind CSS admin dashboard for the SHOP.CO e-commerce store.

> **Status: Scaffold only.** This is a clean, working foundation. Full admin
> features (live auth, data tables, CRUD, analytics) will be built in a later
> phase.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (indigo admin accent on a neutral gray theme)
- **React Router 6** (protected dashboard routes)
- **Firebase** (client SDK — auth + Firestore, wired up later)
- Fetch-based API wrapper with auth token injection

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env vars and fill in your Firebase + API config
cp .env.example .env

# 3. Start the dev server (http://localhost:5174)
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

> On Windows, if `npm` is blocked by execution policy, use `npm.cmd` instead.

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable | Description |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain (`<project>.firebaseapp.com`) |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_API_BASE_URL` | Backend API base URL (default `http://localhost:5000/api`) |

If the Firebase env vars are empty, the app runs in a graceful no-op mode
(`firebaseEnabled = false`) so the scaffold works without any backend.

## Routes

| Path | Description |
| --- | --- |
| `/` | Redirects to `/login` |
| `/login` | Admin login page (placeholder auth) |
| `/access-denied` | Access denied page |
| `/dashboard` | Dashboard home with stat cards |
| `/dashboard/users` | Users management (placeholder) |
| `/dashboard/products` | Products management (placeholder) |
| `/dashboard/orders` | Orders management (placeholder) |

Dashboard routes are wrapped in a `ProtectedRoute` that currently allows access
so the scaffold is explorable. Real Firebase auth checks will be wired in later.

## Project Structure

```
ecommerce-admin/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── firebase/
    │   └── config.js
    ├── layouts/
    │   └── AdminLayout.jsx
    ├── pages/
    │   ├── AdminLogin.jsx
    │   ├── AccessDenied.jsx
    │   ├── DashboardHome.jsx
    │   ├── Users.jsx
    │   ├── Products.jsx
    │   └── Orders.jsx
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── Topbar.jsx
    │   ├── StatCard.jsx
    │   └── ProtectedRoute.jsx
    ├── context/
    │   └── AuthContext.jsx
    └── services/
        └── api.js
```

## Notes

- This is the **admin app**, separate from the customer-facing storefront. It
  uses an indigo dashboard accent color by design.
- Full admin features (live Firebase auth, data tables, CRUD, analytics,
  order workflows) will be implemented in a later phase.
