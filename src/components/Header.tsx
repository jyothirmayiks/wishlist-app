import React from "react";
import { Plus } from "lucide-react";
import { useWishlistStore } from "../store/wishlistStore";
import { CATEGORIES } from "../types";

interface HeaderProps {
  onAddNew: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddNew }) => {
  const { filter, setFilter } = useWishlistStore();

  return (
    <header className="bg-neutral-100 backdrop-blur-xl sticky top-0 z-40 border-b border-gray-200">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between py-5 md:py-6">
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              My Wishlist
            </h1>
            <p className="text-gray-600 text-sm font-medium mt-1">
              Movies & Books to explore
            </p>
          </div>

          <button
            onClick={onAddNew}
            className="w-11 h-11 rounded-full flex items-center justify-center 
              bg-gradient-to-r from-cyan-500 to-teal-500 
              hover:from-cyan-600 hover:to-teal-600
              text-white shadow-md transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="pb-4">
          <div className="flex flex-wrap gap-3">
            <select
              value={filter.type}
              onChange={(e) => setFilter({ type: e.target.value as any })}
              className="px-4 py-2 bg-neutral-100 text-gray-700 
                border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                transition-all duration-200 text-sm font-medium"
            >
              <option value="all">All Types</option>
              <option value="movie">Movies</option>
              <option value="book">Books</option>
            </select>

            <select
              value={filter.category}
              onChange={(e) => setFilter({ category: e.target.value })}
              className="px-4 py-2 bg-neutral-100 text-gray-700 
                border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                transition-all duration-200 text-sm font-medium"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={filter.status}
              onChange={(e) => setFilter({ status: e.target.value as any })}
              className="px-4 py-2 bg-neutral-100 text-gray-700 
                border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                transition-all duration-200 text-sm font-medium"
            >
              <option value="all">All Status</option>
              <option value="watched">Watched/Read</option>
              <option value="unwatched">Not Watched/Read</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
