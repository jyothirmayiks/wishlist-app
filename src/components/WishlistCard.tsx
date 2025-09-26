import React from "react";
import { Heart, CheckCircle2, Trash2, Film, BookOpen } from "lucide-react";
import type { WishlistItem } from "../types";
import { useWishlistStore } from "../store/wishlistStore";

interface WishlistCardProps {
  item: WishlistItem;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({ item }) => {
  const toggleWatched = useWishlistStore((state) => state.toggleWatched);
  const toggleFavorite = useWishlistStore((state) => state.toggleFavorite);
  const removeItem = useWishlistStore((state) => state.removeItem);

  const TypeIcon = item.type === "movie" ? Film : BookOpen;

  return (
    <div className="group bg-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 w-full border border-gray-200">
      <div className="relative flex justify-center items-center h-32 bg-gray-100">
        <TypeIcon className="w-8 h-8 text-gray-500" />

        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => toggleFavorite(item.id)}
            className={`p-2 rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${
              item.isFavorite
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-cyan-500/80 hover:text-white"
            }`}
          >
            <Heart
              className="w-4 h-4"
              fill={item.isFavorite ? "currentColor" : "none"}
            />
          </button>
          <button
            onClick={() => toggleWatched(item.id)}
            className={`p-2 rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${
              item.isWatched
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-cyan-500/80 hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="p-2 rounded-full shadow-sm bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {item.title}
        </h3>

        <div className="flex flex-wrap gap-2 text-xs items-center">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            <TypeIcon className="w-3 h-3 mr-1" />
            {item.type === "movie" ? "Movie" : "Book"}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            {item.category}
          </span>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              item.isWatched
                ? "bg-cyan-100 text-cyan-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {item.isWatched
              ? item.type === "movie"
                ? "Watched"
                : "Read"
              : item.type === "movie"
              ? "To Watch"
              : "To Read"}
          </span>
        </div>

        {item.description && (
          <p className="text-gray-600 text-sm line-clamp-3 mt-1">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};
