
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/context/store-context';
import { Button } from '@/components/ui/button';
import { Price } from '@/components/ui/price';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity, cartTotal } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, navigate to checkout page
    setTimeout(() => {
      setIsCheckingOut(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-medium">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-medium sm:text-3xl">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="divide-y">
            {cart.map((item, index) => (
              <div key={`${item.product.id}-${item.size}-${item.color.name}`} className="flex py-6">
                {/* Product Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium">
                        <Link to={`/product/${item.product.id}`}>
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.color.name} / {item.size}
                      </p>
                    </div>
                    <Price price={item.product.price} />
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <button
                        onClick={() => updateCartItemQuantity(index, Math.max(1, item.quantity - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-full border"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-sm text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Order Summary</h2>
          
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p className="font-medium">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Shipping</p>
              <p className="font-medium">Calculated at checkout</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Tax</p>
              <p className="font-medium">Calculated at checkout</p>
            </div>
            
            <div className="my-4 border-t pt-4">
              <div className="flex justify-between">
                <p className="text-base font-medium">Total</p>
                <p className="text-base font-medium">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <Button
            className="mt-6 w-full gap-2"
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? (
              "Processing..."
            ) : (
              <>
                Checkout <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
          
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
