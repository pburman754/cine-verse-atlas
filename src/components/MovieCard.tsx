import { Movie } from '@/types';
import { Star, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 card-shadow bg-card border-border overflow-hidden"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-primary fill-current" />
          <span className="text-xs font-medium">{movie.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{movie.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{movie.runtime}m</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {movie.synopsis}
        </p>
      </CardContent>
    </Card>
  );
};

export default MovieCard;