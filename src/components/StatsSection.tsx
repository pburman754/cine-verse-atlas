import { Film, Users, Star, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Film,
      value: '2.5M+',
      label: 'Movies & TV Shows',
      description: 'Comprehensive database of entertainment content'
    },
    {
      icon: Users,
      value: '50M+',
      label: 'Global Users',
      description: 'Active community of film enthusiasts'
    },
    {
      icon: Star,
      value: '500M+',
      label: 'User Ratings',
      description: 'Trusted reviews and recommendations'
    },
    {
      icon: Award,
      value: '10K+',
      label: 'Awards Tracked',
      description: 'Complete awards and recognition database'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The World's Most Comprehensive 
            <span className="text-primary"> Entertainment Database</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by millions of users worldwide for accurate, up-to-date information 
            about movies, TV shows, and the people who make them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg card-gradient border border-border card-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-lg mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;