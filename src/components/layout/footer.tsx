
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & About */}
          <div className="flex flex-col">
            <Link to="/" className="text-2xl font-bold">
              Belive
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Modern clothing for the modern individual. Quality materials, 
              sustainable practices, and timeless designs.
            </p>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-base font-medium mb-3">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/men" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-base font-medium mb-3">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="text-base font-medium mb-3">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Store Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Belive Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
