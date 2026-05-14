# The Daily Pantry

A modern grocery landing page with a fully functional backend, shopping cart, order management, and newsletter subscriptions. Built with React, Vite, Tailwind CSS, and Express.js.

---

## 🛒 Features

- **Product Catalog** — Popular products, daily sells, deals of the day, featured categories
- **Shopping Cart** — Add/remove items, update quantities, persistent server-side storage
- **Order Placement** — Checkout creates an order snapshot and clears the cart
- **Newsletter** — Subscribe with email validation and duplicate prevention
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Animations** — GSAP-powered scroll animations and slick carousels

---

## 🏗️ Tech Stack

**Frontend**
- React 19 + Vite 7
- Tailwind CSS 4
- GSAP + ScrollTrigger
- React Slick (carousel)
- Remix Icons

**Backend**
- Express.js (ES Modules)
- CORS-enabled JSON API
- File-based JSON database (`server/db.json`)
- UUID for unique IDs

---

## 📁 Project Structure

```
the-daily-pantry/
├── server/                 # Express backend
│   ├── index.js           # App entry, middleware, routes
│   ├── db.json            # Persistent data (can be gitignored)
│   ├── seed-data.json     # Initial product/category data
│   ├── seed.js            # Populates db.json if empty
│   ├── routes/
│   │   ├── products.js    # Products + filters
│   │   ├── categories.js  # Categories + featured
│   │   ├── cart.js        # Cart CRUD
│   │   ├── orders.js      # Order placement & history
│   │   └── newsletter.js  # Subscriptions
│   ├── middleware/
│   │   ├── validation.js  # Email, required fields
│   │   └── errorHandler.js # Central error handler
│   └── utils/
│       └── fileDb.js      # Async read/write db.json
├── src/
│   ├── context/
│   │   └── CartContext.jsx # Global cart state
│   ├── components/
│   │   ├── CartDrawer.jsx  # Slide-out cart panel
│   │   └── Navbar/         # Navbar with dynamic badge
│   ├── pages/              # Page sections (Hero, Products, etc.)
│   └── utilities/
│       └── api.js          # Centralized API client
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install root dependencies (frontend + concurrently)
npm install

# Install server dependencies
cd server && npm install && cd ..
```

### Development

```bash
# Start both frontend (Vite) and backend (Express) concurrently
npm run dev:full
```

- Frontend: http://localhost:5173 (or next available port)
- Backend: http://localhost:3001

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server only |
| `npm run server` | Start Express server only |
| `npm run dev:full` | Start both servers concurrently |
| `npm run build` | Build frontend for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run seed` (in `server/`) | Populate `db.json` from `seed-data.json` |

---

## 🔌 API Reference

All endpoints are prefixed with `/api` and run on port 3001.

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/products` | List all products (supports `?category=`, `?search=`, `?sortBy=price&order=asc`, `?minPrice=`, `?maxPrice=`) |
| `GET` | `/products/:id` | Get single product |
| `GET` | `/popularProducts` | Get popular products |
| `GET` | `/dailySells` | Get daily sells |
| `GET` | `/dealsOfTheDay` | Get deals of the day |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/categories` | List all categories |
| `GET` | `/featuredCategories` | List featured categories |
| `GET` | `/categories/:id/products` | Products in a category |
| `POST` | `/categories` | Create category (admin) |

### Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/cart` | Get current cart |
| `POST` | `/cart` | Add item `{ productId, quantity }` |
| `PATCH` | `/cart/:itemId` | Update quantity `{ quantity }` |
| `DELETE` | `/cart/:itemId` | Remove item |
| `DELETE` | `/cart` | Clear cart |

**Cart Logic:**
- Adding an existing product increments quantity instead of duplicating
- Quantity set to `0` via PATCH removes the item
- Totals (`totalItems`, `totalPrice`) are recalculated on every change

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/orders` | List all orders (newest first) |
| `GET` | `/orders/:id` | Get single order |
| `POST` | `/orders` | Place order (snapshots cart, clears it, returns order) |

### Newsletter

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/newsletter` | List all subscribers |
| `POST` | `/newsletter` | Subscribe `{ email }` (validates format, blocks duplicates) |

---

## 🎨 Frontend Architecture

### Cart Context

The entire app is wrapped in `<CartProvider>` (see `src/context/CartContext.jsx`). Any component can call:

```jsx
import { useCart } from '../context/CartContext';

const { cart, itemCount, addToCart, updateQuantity, removeItem, clearCart, checkout } = useCart();
```

### API Client

All API calls go through `src/utilities/api.js`. Methods mirror the endpoints above and throw on non-2xx responses.

### Components

- **CartDrawer** — slides from right, shows items, quantity controls, subtotal, checkout button
- **ActionIcons / NavbarMain** — cart icon with dynamic badge, opens drawer
- **Product Cards** — `PopularProductCard`, `DailySellProduct`, `ProductCategoryComponent`, `DealDayProduct` — all have `onClick` on Add button to call `addToCart(productId, 1)`

---

## 🗄️ Data Model

```json
// server/db.json structure
{
  "categories": [{ "id": 1, "title": "Milks and Dairies", "icon": "..." }],
  "featuredCategories": [{ "id": 1, "img": "...", "head": "...", "quantity": "...", "color": "..." }],
  "popularProducts": [{ "id": 1, "deal": "Hot", "img": "...", "cat": "...", "name": "...", "star": "30", "rating": "(4.0)", "company": "...", "realPrice": "28.85", "price": "32.0" }],
  "dailySells": [...],
  "dealsOfTheDay": [...],
  "newsletter": [{ "id": "...", "email": "...", "subscribedAt": "..." }],
  "orders": [{ "id": "...", "items": [...], "totalItems": 2, "totalPrice": 57.70, "status": "confirmed", "orderedAt": "..." }],
  "cart": { "items": [{ "id": "...", "productId": 1, "name": "...", "price": 28.85, "img": "...", "quantity": 2 }], "totalItems": 2, "totalPrice": 57.70 }
}
```

---

## ⚙️ Environment

No `.env` file needed for local development. The frontend points to `http://localhost:3001/api` in `src/utilities/api.js`. To deploy:

1. Deploy `server/` to a Node host (Railway, Render, Fly.io, etc.)
2. Update `API_BASE` in `src/utilities/api.js` to your production backend URL
3. Build frontend: `npm run build` → deploy `dist/` to Vercel/Netlify/Cloudflare Pages

---

## 🧪 Testing the API

```bash
# Products
curl http://localhost:3001/api/popularProducts
curl http://localhost:3001/api/products/1

# Cart
curl -X POST http://localhost:3001/api/cart -H "Content-Type: application/json" -d '{"productId":1,"quantity":2}'
curl http://localhost:3001/api/cart

# Orders
curl -X POST http://localhost:3001/api/orders
curl http://localhost:3001/api/orders

# Newsletter
curl -X POST http://localhost:3001/api/newsletter -H "Content-Type: application/json" -d '{"email":"test@example.com"}'
```

---

## 🐛 Known Limitations

- **No authentication** — Orders are anonymous; no user accounts
- **Flat-file DB** — `db.json` is not suitable for high concurrency or large scale
- **No product stock tracking** — Add to Cart always succeeds regardless of inventory
- **No admin UI** — Products/categories can only be managed by editing `db.json` or extending the API
- **Cart cleared on server restart** if `db.json` is not persisted (it is persisted; just don't delete it)

---

## 📦 Git Strategy

**Do not commit:**
- `server/db.json` — contains local runtime state (add to `.gitignore`)
- `node_modules/`, `dist/`, `.vite/`

**Commit:**
- Everything else — the backend code, frontend source, seed data, configs

The `server/seed.js` script auto-populates `db.json` from `seed-data.json` if the database is empty.

---

## 🤝 Contributing

Fork, branch, PR. Keep commit messages clear and scope-focused.

---

## 📄 License

MIT — do whatever you want, just give credit.

---

**Made with ☕ and 🛒 by The Daily Pantry team.**
