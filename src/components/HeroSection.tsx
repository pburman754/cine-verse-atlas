import { Button } from '@/components/ui/button';
import { Play, Plus, Star } from 'lucide-react';
import { sampleMovies } from '@/data/sampleMovies';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const featuredMovie = sampleMovies[0]; // The Dark Symphony

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-current" />
            <span className="text-primary font-medium">Featured Film</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Cinema
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The ultimate destination for film and television knowledge. 
            Explore millions of titles, discover new favorites, and connect with 
            the stories that move the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Play className="h-5 w-5 mr-2" />
              Explore Now
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              <Plus className="h-5 w-5 mr-2" />
              Join Community
            </Button>
          </div>
          
          {/* Featured Movie Info */}
          <div className="mt-12 p-6 bg-card/80 backdrop-blur-sm rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-primary font-medium">NOW TRENDING</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{featuredMovie.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {featuredMovie.synopsis}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-primary fill-current" />
                <span className="font-medium">{featuredMovie.rating}/10</span>
              </div>
              <span className="text-muted-foreground">{featuredMovie.year}</span>
              <span className="text-muted-foreground">{featuredMovie.genre[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;