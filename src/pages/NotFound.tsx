
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center cyber-grid">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl mx-auto text-center z-10 px-4">
        <div className="glass rounded-lg p-12 animate-scale-in">
          <div className="text-8xl font-bold gradient-text mb-6 animate-pulse-glow">
            404
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Looks like you've ventured into uncharted digital territory. 
            The page you're looking for doesn't exist in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="glow hover:animate-pulse-glow">
                <Home size={20} className="mr-2" />
                Return Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass hover:glow"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
