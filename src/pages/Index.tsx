import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MoviesGrid from '@/components/MoviesGrid';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { sampleMovies } from '@/data/sampleMovies';

const Index = () => {
  const trendingMovies = sampleMovies.slice(0, 5);
  const topRatedMovies = [...sampleMovies].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MoviesGrid 
          movies={trendingMovies}
          title="Trending Now"
          subtitle="The most popular movies and shows this week"
        />
        <StatsSection />
        <MoviesGrid 
          movies={topRatedMovies}
          title="Top Rated"
          subtitle="Highest rated content from our community"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
