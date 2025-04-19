
import React from 'react';
import { cn } from '@/lib/utils';

interface PriceProps {
  price: number;
  originalPrice?: number;
  className?: string;
}

export function Price({ price, originalPrice, className }: PriceProps) {
  const isOnSale = originalPrice && originalPrice > price;
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className={cn(
        "text-base font-medium",
        isOnSale ? "text-destructive" : "text-foreground"
      )}>
        ${price.toFixed(2)}
      </span>
      
      {isOnSale && (
        <span className="text-sm text-muted-foreground line-through">
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
}
