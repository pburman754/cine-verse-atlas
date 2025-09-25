import { Film, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Caset
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The world's most comprehensive film and television database. 
              Discover, rate, and share your favorite entertainment content 
              with a global community of film enthusiasts.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Movies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">TV Shows</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">People</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Awards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Box Office</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lists</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Forums</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contributors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 Caset. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;