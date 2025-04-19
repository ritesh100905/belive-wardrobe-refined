
import { Banner as BannerType } from '@/types';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BannerProps {
  banner: BannerType;
  className?: string;
}

export function Banner({ banner, className }: BannerProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-md", className)}>
      <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/7]">
        <img 
          src={banner.image} 
          alt={banner.title}
          className="h-full w-full object-cover brightness-[0.85]"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{banner.title}</h2>
        {banner.description && (
          <p className="mt-2 max-w-md text-base sm:text-lg">{banner.description}</p>
        )}
        <Link 
          to={banner.link} 
          className="mt-4 inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
