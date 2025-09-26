import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { useWishlistStore } from "../store/wishlistStore";
import { CATEGORIES } from "../types";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddItemModal: React.FC<AddItemModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addItem } = useWishlistStore();
  const [formData, setFormData] = useState({
    title: "",
    type: "movie" as "movie" | "book",
    category: "Action",
   

    director: "",
    description: "",
    imageUrl:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    addItem({
      title: formData.title,
      type: formData.type,
      category: formData.category,
      director: formData.type === "movie" ? formData.director : undefined,
      description: formData.description,
      imageUrl: formData.imageUrl,
    });

    setFormData({
      title: "",
      type: "movie",
      category: "Action",
      director: "",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-100 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg border border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Add New Item
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl  bg-gray-50 text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              placeholder="Enter title..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value as "movie" | "book" })
              }
              className="w-full px-4 py-3 rounded-xl  bg-gray-50 text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
            >
              <option value="movie">Movie</option>
              <option value="book">Book</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl  bg-gray-50 text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl  bg-gray-50 text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
              rows={3}
              placeholder="Brief description..."
            />
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-5 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 
                rounded-xl transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-5 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 
                hover:from-cyan-600 hover:to-teal-600 text-white rounded-xl 
                transition-all duration-200 font-medium shadow-md 
                flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
