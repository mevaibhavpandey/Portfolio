import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            VP
          </Link>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8 inline-block p-4 bg-destructive/10 rounded-full">
            <AlertCircle size={64} className="text-destructive" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-3xl font-bold text-primary mb-4">Page Not Found</p>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist. It might have been moved
            or deleted.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 btn-primary">
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
