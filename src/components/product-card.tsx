
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Price } from '@/components/ui/price';
import { useStore } from '@/context/store-context';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useStore();
  const favorited = isFavorite(product.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className={cn("group relative flex flex-col", className)}>
      <Link to={`/product/${product.id}`} className="w-full overflow-hidden">
        <div className="relative aspect-[3/4] bg-secondary/20 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-brand px-2 py-1 text-xs font-medium text-brand-foreground">
                New
              </span>
            )}
            {product.isOnSale && (
              <span className="bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
                Sale
              </span>
            )}
          </div>

          {/* Favorite button */}
          <button 
            onClick={toggleFavorite}
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 transition-colors hover:bg-background"
          >
            <Heart 
              size={18} 
              className={cn(
                "transition-colors",
                favorited ? "fill-destructive text-destructive" : "text-foreground"
              )} 
            />
          </button>
        </div>

        <div className="mt-3 flex flex-col">
          <h3 className="line-clamp-1 text-sm font-medium">{product.name}</h3>
          <Price 
            price={product.price} 
            originalPrice={product.originalPrice} 
            className="mt-1"
          />
        </div>
      </Link>
    </div>
  );
}
