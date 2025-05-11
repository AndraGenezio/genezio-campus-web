
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-genezio-light">
      <div className="text-center px-4">
        <div className="text-6xl text-genezio-lavender mb-4">404</div>
        <h1 className="text-4xl font-merriweather font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="btn-primary" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
