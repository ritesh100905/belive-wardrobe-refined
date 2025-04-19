
import { useEffect } from 'react';
import { Banner } from '@/components/banner';
import { CategoryCard } from '@/components/category-card';
import { ProductGrid } from '@/components/product-grid';
import { SectionTitle } from '@/components/section-title';
import { banners } from '@/data/banners';
import { categories } from '@/data/categories';
import { getFeaturedProducts, getNewArrivals, getOnSaleProducts } from '@/data/products';

export default function HomePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const onSaleProducts = getOnSaleProducts();
  const activeBanner = banners.find(banner => banner.isActive);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Banner */}
      {activeBanner && (
        <section className="mt-4 px-4 md:mt-6">
          <Banner banner={activeBanner} />
        </section>
      )}

      {/* Categories */}
      <section className="container px-4 mx-auto">
        <SectionTitle 
          title="Shop by Category" 
          subtitle="Find what you're looking for"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 mx-auto">
        <SectionTitle 
          title="Featured Products" 
          subtitle="Handpicked by our stylists"
        />
        <ProductGrid products={featuredProducts} />
      </section>

      {/* New Arrivals */}
      <section className="container px-4 mx-auto">
        <SectionTitle 
          title="New Arrivals" 
          subtitle="Just landed in our store"
        />
        <ProductGrid products={newArrivals} />
      </section>

      {/* On Sale */}
      {onSaleProducts.length > 0 && (
        <section className="container px-4 mx-auto">
          <SectionTitle 
            title="On Sale" 
            subtitle="Limited time offers"
          />
          <ProductGrid products={onSaleProducts} />
        </section>
      )}
    </div>
  );
}
