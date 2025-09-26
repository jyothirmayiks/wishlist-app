import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WishlistItem, WishlistState } from '../types';

const mockData: WishlistItem[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    type: 'movie',
    category: 'Sci-Fi',
    year: 2024,
    director: 'Denis Villeneuve',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-15')
  },
  {
  id: '2',
  title: 'The Hobbit',
  type: 'book',
  category: 'Fantasy',
  author: 'J.R.R. Tolkien',
  description: 'Bilbo Baggins, a hobbit, goes on an unexpected journey with dwarves to reclaim their mountain home from a dragon.',
  imageUrl: 'https://m.media-amazon.com/images/I/71jD4jMityL._UF1000,1000_QL80_.jpg',
  isWatched: true,
  isFavorite: true,
  addedDate: new Date('2024-01-10')
},
  {
    id: '3',
    title: 'Oppenheimer',
    type: 'movie',
    category: 'Biography',
    year: 2023,
    director: 'Christopher Nolan',
    description: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg',
    isWatched: true,
    isFavorite: false,
    addedDate: new Date('2024-01-05')
  },
  {
    id: '4',
    title: 'Project Hail Mary',
    type: 'book',
    category: 'Sci-Fi',
    author: 'Andy Weir',
    description: 'A lone astronaut must save humanity in this thrilling science fiction adventure.',
    imageUrl: 'https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-20')
  },
  {
    id: '5',
    title: 'The Batman',
    type: 'movie',
    category: 'Action',
    year: 2022,
    director: 'Matt Reeves',
    description: 'Batman ventures into Gothams underworld when a sadistic killer leaves behind a trail of cryptic clues.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-12')
  },
  {
    id: '6',
    title: 'Klara and the Sun',
    type: 'book',
    category: 'Drama',
    author: 'Kazuo Ishiguro',
    description: 'A moving tale told from the perspective of Klara, an artificial friend observing human behavior.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603206535i/54120408.jpg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-08')
  },
  {
    id: '7',
    title: 'Spider-Man: Across the Spider-Verse',
    type: 'movie',
    category: 'Animation',
    year: 2023,
    director: 'Joaquim Dos Santos',
    description: 'Miles Morales embarks on a multidimensional adventure across the Spider-Verse.',
    imageUrl: 'https://popcornusa.s3.amazonaws.com/movies/650/8520-32463-SpiderMapng',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-18')
  },
  {
    id: '8',
    title: 'Guardians of the Galaxy Vol. 3',
    type: 'movie',
    category: 'Sci-Fi',
    year: 2023,
    director: 'James Gunn',
    description: 'The Guardians embark on a mission to protect the galaxy from a new threat.',
    imageUrl: 'https://cdn.marvel.com/content/1x/guardians_3.jpg',
    isWatched: true,
    isFavorite: true,
    addedDate: new Date('2024-01-03')
  },
  {
    id: '9',
    title: 'The Super Mario Bros. Movie',
    type: 'movie',
    category: 'Animation',
    year: 2023,
    director: 'Aaron Horvath',
    description: 'Mario and Luigi journey through the Mushroom Kingdom to save Princess Peach.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzc2NTE1ZTktZTE4ZS00OGRlLWFlMGQtMjJjNzJkZTQwNzFiXkEyXkFqcGc@._V1_.jpg',
    isWatched: true,
    isFavorite: false,
    addedDate: new Date('2024-01-01')
  },
  {
    id: '10',
    title: 'John Wick: Chapter 4',
    type: 'movie',
    category: 'Action',
    year: 2023,
    director: 'Chad Stahelski',
    description: 'John Wick continues his battle against the High Table.',
    imageUrl: 'https://i.pinimg.com/736x/79/43/1f/79431f28f3ff157c4be075a590621094.jpg',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-09')
  },
  {
    id: '11',
    title: 'Where the Crawdads Sing',
    type: 'book',
    category: 'Mystery',
    author: 'Delia Owens',
    description: 'A murder mystery intertwined with a coming-of-age story set in the marshes of North Carolina.',
    imageUrl: 'https://m.media-amazon.com/images/I/81SjX1vUR4L._UF894,1000_QL80_.jpg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-02')
  },
  {
    id: '12',
    title: 'The Midnight Library',
    type: 'book',
    category: 'Fantasy',
    author: 'Matt Haig',
    description: 'A library between life and death allows one to explore all the lives you could have lived.',
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg',
    isWatched: true,
    isFavorite: false,
    addedDate: new Date('2024-01-06')
  },
  {
    id: '13',
    title: 'The Night Circus',
    type: 'book',
    category: 'Fantasy',
    author: 'Erin Morgenstern',
    description: 'A magical competition between two young illusionists that evolves into a mystical love story.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/TheNightCircus.jpg',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-07')
  },
  {
    id: '14',
    title: 'Circe',
    type: 'book',
    category: 'Mythology',
    author: 'Madeline Miller',
    description: 'The story of the goddess Circe and her journey through mythological challenges.',
    imageUrl: 'https://images.booksense.com/images/905/268/9786042268905.jpg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-11')
  },
  {
    id: '15',
    title: 'Educated',
    type: 'book',
    category: 'Memoir',
    author: 'Tara Westover',
    description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the world through education.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg',
    isWatched: true,
    isFavorite: true,
    addedDate: new Date('2024-01-13')
  },
  {
    id: '16',
    title: 'Big Little Lies',
    type: 'book',
    category: 'Drama',
    author: 'Liane Moriarty',
    description: 'Secrets and lies unravel in an Australian community, leading to murder and drama.',
    imageUrl: 'https://m.media-amazon.com/images/I/91vQGAdwJSL._UF1000,1000_QL80_.jpg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-14')
  },
  {
    id: '17',
    title: 'Mission: Impossible – Dead Reckoning Part One',
    type: 'movie',
    category: 'Action',
    year: 2023,
    director: 'Christopher McQuarrie',
    description: 'Ethan Hunt and his IMF team race against time to stop a new global threat.',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR34_otMSvSpe1Nn8Iip4kpkcaAHrUGaIITwQYC9iRIL4q34rHhTY2cTYrbRe303iD5fdsm',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-16')
  },
  {
    id: '18',
    title: 'The Marvels',
    type: 'movie',
    category: 'Superhero',
    year: 2023,
    director: 'Nia DaCosta',
    description: 'Carol Danvers teams up with Kamala Khan and Monica Rambeau to save the universe.',
    imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/56245l11a_goat_philippines_apac_poster_1sht_e357e03a.jpeg',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-17')
  },
  {
    id: '19',
    title: 'Elemental',
    type: 'movie',
    category: 'Animation',
    year: 2023,
    director: 'Peter Sohn',
    description: 'In a city where fire-, water-, land-, and air-residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they have in common.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjU2MjE1OGItZjdmYS00ZmIyLTljNjYtOWI5ZGRkZjM4NDEwXkEyXkFqcGc@._V1_.jpg',
    isWatched: false,
    isFavorite: true,
    addedDate: new Date('2024-01-19')
  },
  {
    id: '20',
    title: 'Indiana Jones and the Dial of Destiny',
    type: 'movie',
    category: 'Adventure',
    year: 2023,
    director: 'James Mangold',
    description: 'Indiana Jones comes out of retirement to stop a new threat involving Nazi scientists and a powerful artifact.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKhl5t7mQW-dC2Pk94bmEabWLSU3oL3Vi7x1midYiPqu_vy3FgadgMF9BKUJcyc-TvVUv',
    isWatched: false,
    isFavorite: false,
    addedDate: new Date('2024-01-21')
  }
];


export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: mockData,
      filter: {
        type: 'all',
        category: 'all',
        status: 'all'
      },

      addItem: (newItem) => {
        const item: WishlistItem = {
          ...newItem,
          id: Date.now().toString(),
          addedDate: new Date(),
          isWatched: false,
          isFavorite: false
        };
        set((state) => ({
          items: [item, ...state.items]
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },

      toggleWatched: (id) => {
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, isWatched: !item.isWatched } : item
          )
        }));
      },

      toggleFavorite: (id) => {
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
          )
        }));
      },

      setFilter: (newFilter) => {
        set((state) => ({
          filter: { ...state.filter, ...newFilter }
        }));
      },

      getFilteredItems: () => {
        const { items, filter } = get();
        
        return items.filter(item => {
          const typeMatch = filter.type === 'all' || item.type === filter.type;
          const categoryMatch = filter.category === 'all' || item.category === filter.category;
          const statusMatch = filter.status === 'all' || 
            (filter.status === 'watched' && item.isWatched) ||
            (filter.status === 'unwatched' && !item.isWatched);
          
          return typeMatch && categoryMatch && statusMatch;
        });
      }
    }),
    {
      name: 'wishlist-storage'
    }
  )
);