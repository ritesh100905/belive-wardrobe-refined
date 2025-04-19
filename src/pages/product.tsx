
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '@/context/store-context';
import { getProductById } from '@/data/products';
import { Price } from '@/components/ui/price';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, isFavorite, addToFavorites, removeFromFavorites } = useStore();
  
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || { name: '', value: '' });
  const [activeImage, setActiveImage] = useState(0);
  
  const favorited = product ? isFavorite(product.id) : false;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reset selections when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || { name: '', value: '' });
      setActiveImage(0);
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium">Product not found</h1>
        <p className="mt-4 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const toggleFavorite = () => {
    if (favorited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor);
      
      // Show a toast or notification here
      
      // Navigate to cart
      navigate('/cart');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="sticky top-20 self-start space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden bg-secondary/20">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "h-20 w-20 overflow-hidden border-2", 
                    activeImage === i ? "border-brand" : "border-transparent"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col">
          {/* Product Badges */}
          <div className="flex space-x-2 mb-2">
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
          
          {/* Product Name */}
          <h1 className="text-2xl font-medium sm:text-3xl">{product.name}</h1>
          
          {/* Product Price */}
          <Price 
            price={product.price} 
            originalPrice={product.originalPrice} 
            className="mt-2 text-xl"
          />
          
          {/* Product Description */}
          <p className="mt-4 text-muted-foreground">
            {product.description}
          </p>
          
          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Color: {selectedColor.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "h-8 w-8 rounded-full border-2",
                    selectedColor.name === color.name 
                      ? "border-brand" 
                      : "border-border"
                  )}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Size</h3>
            <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "flex h-10 items-center justify-center rounded-md border font-medium",
                    selectedSize === size
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-border text-foreground hover:bg-secondary"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="mt-2 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Add to Cart and Favorite */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button 
              className="flex-1 gap-2"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor.name}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={toggleFavorite}
            >
              <Heart 
                className={cn(
                  "h-5 w-5",
                  favorited ? "fill-destructive text-destructive" : ""
                )} 
              />
              {favorited ? 'Saved' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
