export interface WishlistItem {
  id: string;
  title: string;
  type: 'movie' | 'book';
  category: string;
  year?: number;
  author?: string;
  director?: string;
  description: string;
  imageUrl: string;
  isWatched: boolean;
  isFavorite: boolean;
  addedDate: Date;
}

export interface WishlistState {
  items: WishlistItem[];
  filter: {
    type: 'all' | 'movie' | 'book';
    category: string;
    status: 'all' | 'watched' | 'unwatched';
  };
  addItem: (item: Omit<WishlistItem, 'id' | 'addedDate' | 'isWatched' | 'isFavorite'>) => void;
  removeItem: (id: string) => void;
  toggleWatched: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setFilter: (filter: Partial<WishlistState['filter']>) => void;
  getFilteredItems: () => WishlistItem[];
}

export const CATEGORIES = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'Fantasy',
  'Mystery',
  'Documentary',
  'Biography',
  'History',
  'Adventure'
] as const;