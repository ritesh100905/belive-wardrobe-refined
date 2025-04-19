
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Heart, User } from 'lucide-react';
import { useStore } from '@/context/store-context';
import { categories } from '@/data/categories';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const { cartCount } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-sm">
            <div className="flex flex-col gap-6 py-6">
              <Link to="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                Belive
              </Link>
              <nav className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <NavLink 
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className={({ isActive }) =>
                      cn(
                        "text-base font-medium transition-colors hover:text-brand",
                        isActive ? "text-brand" : "text-foreground"
                      )
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </NavLink>
                ))}
                <NavLink 
                  to="/favorites"
                  className={({ isActive }) =>
                    cn(
                      "text-base font-medium transition-colors hover:text-brand",
                      isActive ? "text-brand" : "text-foreground"
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Favorites
                </NavLink>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Belive
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {categories.map((category) => (
            <NavLink 
              key={category.id}
              to={`/category/${category.slug}`}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive ? "text-brand" : "text-foreground"
                )
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="Search" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Favorites" asChild>
            <Link to="/favorites">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account" asChild>
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart" asChild className="relative">
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-medium text-brand-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
