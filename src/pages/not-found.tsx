
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-medium">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button className="mt-8" asChild>
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
}
