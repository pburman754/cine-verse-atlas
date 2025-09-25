export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  director: string;
  cast: string[];
  rating: number;
  runtime: number;
  synopsis: string;
  poster: string;
  backdrop?: string;
  boxOffice?: number;
  awards?: string[];
  country: string;
  language: string;
}

export interface Person {
  id: string;
  name: string;
  birthDate?: string;
  birthPlace?: string;
  bio: string;
  photo?: string;
  knownFor: string[];
  filmography: {
    title: string;
    year: number;
    role: string;
  }[];
}

export interface UserRating {
  movieId: string;
  userId: string;
  rating: number;
  review?: string;
  timestamp: Date;
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'movie' | 'person' | 'tv';
  year?: number;
  poster?: string;
  subtitle?: string;
}