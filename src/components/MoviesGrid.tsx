import { Movie } from '@/types';
import MovieCard from './MovieCard';

interface MoviesGridProps {
  movies: Movie[];
  title: string;
  subtitle?: string;
}

const MoviesGrid = ({ movies, title, subtitle }: MoviesGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onClick={() => {
                // TODO: Navigate to movie detail page
                console.log('Navigate to movie:', movie.id);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesGrid;