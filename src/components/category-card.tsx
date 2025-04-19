
import { Category as CategoryType } from '@/types';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: CategoryType;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className={cn(
        "group relative block overflow-hidden rounded-md",
        className
      )}
    >
      <div className="aspect-square">
        <img 
          src={category.image} 
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-[0.9]"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-md bg-background/80 px-5 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <h3 className="text-xl font-medium text-foreground">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}
