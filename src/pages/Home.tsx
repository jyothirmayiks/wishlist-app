import React from 'react';
import { Stats } from '../components/Stats';
import { WishlistCard } from '../components/WishlistCard';
import { useWishlistStore } from '../store/wishlistStore';

export const Home: React.FC = () => {
  const items = useWishlistStore(state => state.items);
  const filter = useWishlistStore(state => state.filter);
  
  const filteredItems = React.useMemo(() => {
    return items.filter(item => {
      const typeMatch = filter.type === 'all' || item.type === filter.type;
      const categoryMatch = filter.category === 'all' || item.category === filter.category;
      const statusMatch = filter.status === 'all' || 
        (filter.status === 'watched' && item.isWatched) ||
        (filter.status === 'unwatched' && !item.isWatched);
      
      return typeMatch && categoryMatch && statusMatch;
    });
  }, [items, filter]);

  return (
    <div className="space-y-12">
      <Stats />

      {filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold from-cyan-600 mb-3 tracking-tight">
            No items found
          </h3>
          <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Get started by adding your first movie or book to your wishlist.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredItems.map(item => (
            <WishlistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};