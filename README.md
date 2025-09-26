# Wishlist App

A simple **Movie & Book Wishlist App** built with **React + TypeScript**, allowing users to add, track, and manage their favorite movies and books.

---

## **Overview**

The app lets users:

- Add movies and books with title, type, category, description, and image.
- Mark items as **watched/read** or **favorites**.
- Remove items from the wishlist.
- Filter items by type, category, and status.
- View real-time statistics: total items, watched/read, favorites, movies, books.
- Persist data across reloads using **localStorage**.

---

## **Tech Stack**

- **Frontend:** React + TypeScript
- **State Management:** Zustand (with `persist` middleware)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-react
- **Storage:** Browser `localStorage`
- **Build Tool:** Vite

---

## **How It Works**

1. **Add Items:** User opens a modal, fills in details, and clicks "Add Item". Item is saved in **Zustand store** and synced to `localStorage`.
2. **Wishlist Actions:** Users can mark items as favorite or watched/read, or delete items. Zustand automatically updates the state globally.
3. **Filtering & Stats:** Filters are applied from the store; stats like total items, favorites, and watched/read are calculated reactively.
4. **Persistence:** The app remembers the wishlist even after refresh because the state is saved in the browser.

---

## **State Management (Zustand)**

- Global store holds all wishlist items and filters.
- Actions include: addItem, removeItem, toggleWatched, toggleFavorite, setFilter.
- Access the store anywhere in the app without passing props.
- Middleware handles persistence in `localStorage`.
- Supports reactive updates: UI updates automatically on state change.

---

## **Types**

- `WishlistItem`: Each item with properties like `title`, `type`, `category`, `isWatched`, `isFavorite`.
- `WishlistState`: Store state with items, filter, and actions.

---

## **Installation**

```bash
git clone <repo-url>
cd wishlist-app
npm install
npm run dev
