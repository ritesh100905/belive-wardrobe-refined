
import { useStore } from '@/context/store-context';
import { ProductGrid } from '@/components/product-grid';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites } = useStore();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
          <Heart className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-medium">Your favorites list is empty</h1>
        <p className="mt-4 text-muted-foreground">
          Save your favorite items to find them easily later.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-medium sm:text-3xl">Your Favorites</h1>
      <ProductGrid products={favorites} />
    </div>
  );
}
