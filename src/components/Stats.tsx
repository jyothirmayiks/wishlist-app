import React from "react";
import { Heart, Eye, BookOpen, Film } from "lucide-react";
import { useWishlistStore } from "../store/wishlistStore";

export const Stats: React.FC = () => {
  const { items } = useWishlistStore();

  const stats = {
    total: items.length,
    watched: items.filter((item) => item.isWatched).length,
    favorites: items.filter((item) => item.isFavorite).length,
    movies: items.filter((item) => item.type === "movie").length,
    books: items.filter((item) => item.type === "book").length,
  };

  const statItems = [
    { label: "Total Items", value: stats.total, icon: BookOpen },
    { label: "Watched / Read", value: stats.watched, icon: Eye },
    { label: "Favorites", value: stats.favorites, icon: Heart },
    { label: "Movies", value: stats.movies, icon: Film },
    { label: "Books", value: stats.books, icon: BookOpen },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 w-full">
      {statItems.map((stat, index) => (
        <div
          key={index}
          className="bg-neutral-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
            <div
              className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 
              flex items-center justify-center shadow-sm"
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
