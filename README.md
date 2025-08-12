# Commerce Vista Spark

## 🛒 Project Overview

Commerce Vista Spark is a modern, responsive e-commerce front-end built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It provides a seamless shopping experience with a product grid, shopping cart, category browsing, and authentication pages. The project is designed for easy customization and scalability.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation & Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kiganyamburu/commerce-vista-spark.git
   cd commerce-vista-spark
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

#### Available Scripts

- `npm run dev` — Start the Vite development server with hot reloading
- `npm run build` — Build the app for production (output in `dist/`)
- `npm run preview` — Preview the production build locally

---

## 📁 Project Structure

- `src/components/` — Reusable UI and app components
  - `ui/` — Prebuilt UI primitives from shadcn/ui
- `src/pages/` — Main pages (Categories, Product, Login, Signup, etc.)
- `src/lib/` — Utility and data files (e.g., product data, helpers)
- `src/hooks/` — Custom React hooks
- `public/` — Static assets (favicon, robots.txt, etc.)
- `App.tsx` — Main app component
- `main.tsx` — Entry point

---

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) — Fast build tool
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) — Accessible UI components

---

## ✨ Features

- Responsive product grid and cards
- Category browsing and filtering
- Product detail pages
- Shopping cart with add/remove functionality
- Authentication pages (Login, Signup)
- Modern, accessible UI with shadcn/ui
- Easy to extend and customize

---

## 🧑‍💻 Usage Guide

1. **Browse Products:**
   - View all products or filter by category on the homepage.
2. **View Product Details:**
   - Click a product card to see detailed information.
3. **Shopping Cart:**
   - Add or remove products from the cart. Cart state is managed in React state.
4. **Authentication:**
   - Use the Login and Signup pages for user authentication (UI only, no backend).

---

## 🚢 Deployment

You can deploy this project to any static hosting provider (e.g., **Vercel**, **Netlify**, **GitHub Pages**) after building:

```sh
npm run build
# Deploy the contents of the dist/ folder to your hosting provider
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit and push (`git commit -m 'Add feature' && git push`)
5. Open a Pull Request

Please follow the existing code style and include clear commit messages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to customize this project for your own e-commerce needs!
