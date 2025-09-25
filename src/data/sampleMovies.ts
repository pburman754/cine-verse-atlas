import { Movie } from '@/types';
import moviePoster1 from '@/assets/movie-poster-1.jpg';
import moviePoster2 from '@/assets/movie-poster-2.jpg';
import moviePoster3 from '@/assets/movie-poster-3.jpg';

export const sampleMovies: Movie[] = [
  {
    id: '1',
    title: 'The Dark Symphony',
    year: 2024,
    genre: ['Drama', 'Thriller', 'Mystery'],
    director: 'Christopher Nolan',
    cast: ['Oscar Isaac', 'Tilda Swinton', 'Michael Shannon', 'Lupita Nyong\'o'],
    rating: 8.7,
    runtime: 148,
    synopsis: 'A psychological thriller following a renowned composer who discovers a conspiracy hidden within classical music history. As he delves deeper into the mystery, reality and imagination blur in this mind-bending exploration of art, obsession, and truth.',
    poster: moviePoster1,
    boxOffice: 245000000,
    awards: ['Academy Award Winner', 'Golden Globe Winner'],
    country: 'United States',
    language: 'English'
  },
  {
    id: '2',
    title: 'Stellar Horizons',
    year: 2024,
    genre: ['Science Fiction', 'Adventure', 'Action'],
    director: 'Denis Villeneuve',
    cast: ['Zendaya', 'Timothée Chalamet', 'Rebecca Ferguson', 'Josh Brolin'],
    rating: 9.1,
    runtime: 165,
    synopsis: 'An epic space opera spanning multiple worlds and civilizations. When a young explorer discovers an ancient artifact that could change the fate of the galaxy, she must navigate political intrigue and cosmic dangers to prevent an intergalactic war.',
    poster: moviePoster2,
    boxOffice: 387000000,
    awards: ['BAFTA Winner', 'Critics Choice Award'],
    country: 'United States',
    language: 'English'
  },
  {
    id: '3',
    title: 'Royal Hearts',
    year: 2023,
    genre: ['Romance', 'Drama', 'Period'],
    director: 'Greta Gerwig',
    cast: ['Saoirse Ronan', 'Paul Mescal', 'Florence Pugh', 'Mark Rylance'],
    rating: 8.3,
    runtime: 127,
    synopsis: 'Set in 18th century England, this romantic drama follows the forbidden love between a duchess and a commoner. Their passionate affair challenges the rigid social hierarchy and threatens to tear apart the very fabric of aristocratic society.',
    poster: moviePoster3,
    boxOffice: 156000000,
    awards: ['SAG Award Winner'],
    country: 'United Kingdom',
    language: 'English'
  },
  {
    id: '4',
    title: 'Midnight in Tokyo',
    year: 2024,
    genre: ['Action', 'Crime', 'Thriller'],
    director: 'Ryusuke Hamaguchi',
    cast: ['Hiroyuki Sanada', 'Rinko Kikuchi', 'John Cho', 'Gemma Chan'],
    rating: 8.5,
    runtime: 134,
    synopsis: 'A former yakuza member turned private detective must navigate the neon-lit underworld of Tokyo to solve a series of mysterious disappearances. This stylish neo-noir thriller explores themes of redemption and honor in modern Japan.',
    poster: moviePoster1,
    boxOffice: 89000000,
    awards: ['Cannes Film Festival Winner'],
    country: 'Japan',
    language: 'Japanese'
  },
  {
    id: '5',
    title: 'The Last Frontier',
    year: 2023,
    genre: ['Western', 'Drama', 'Adventure'],
    director: 'Chloé Zhao',
    cast: ['Oscar Isaac', 'Michelle Williams', 'Brian Cox', 'Thomasin McKenzie'],
    rating: 7.9,
    runtime: 142,
    synopsis: 'In the dying days of the American frontier, a aging gunslinger must confront his violent past when a young woman seeks his help to save her town from a ruthless land baron. A meditation on legacy, violence, and the end of an era.',
    poster: moviePoster2,
    boxOffice: 67000000,
    awards: ['Venice Film Festival Selection'],
    country: 'United States',
    language: 'English'
  },
  {
    id: '6',
    title: 'Dreams of Mumbai',
    year: 2024,
    genre: ['Drama', 'Musical', 'Romance'],
    director: 'Zoya Akhtar',
    cast: ['Deepika Padukone', 'Ranveer Singh', 'Alia Bhatt', 'Ranbir Kapoor'],
    rating: 8.1,
    runtime: 155,
    synopsis: 'A vibrant musical drama following the intertwined lives of dreamers in Mumbai. From struggling actors to ambitious entrepreneurs, this colorful tale celebrates the spirit of India\'s entertainment capital and the price of chasing dreams.',
    poster: moviePoster3,
    boxOffice: 203000000,
    awards: ['Filmfare Award Winner'],
    country: 'India',
    language: 'Hindi'
  }
];