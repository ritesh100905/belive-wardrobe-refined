import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '@/types';

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size: string, color: { name: string; value: string }) => void;
  removeFromCart: (itemIndex: number) => void;
  updateCartItemQuantity: (itemIndex: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // Initialize cart from localStorage (if available)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('belive-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Initialize favorites from localStorage (if available)
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const savedFavorites = localStorage.getItem('belive-favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  // Calculate total items in cart
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('belive-cart', JSON.stringify(cart));
  }, [cart]);

  // Persist favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('belive-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add item to cart
  const addToCart = (
    product: Product,
    quantity: number,
    size: string,
    color: { name: string; value: string }
  ) => {
    setCart((prevCart) => {
      // Check if the product with the same size and color already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.size === size && 
          item.color.name === color.name
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Otherwise add a new item
        return [...prevCart, { product, quantity, size, color }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemIndex: number) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  // Update cart item quantity
  const updateCartItemQuantity = (itemIndex: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[itemIndex].quantity = quantity;
      return updatedCart;
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Add product to favorites
  const addToFavorites = (product: Product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((item) => item.id === product.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  // Remove product from favorites
  const removeFromFavorites = (productId: string) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  // Check if a product is in favorites
  const isFavorite = (productId: string) => {
    return favorites.some((product) => product.id === productId);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    cartTotal,
    cartCount,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
