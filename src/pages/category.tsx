
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '@/components/product-grid';
import { SectionTitle } from '@/components/section-title';
import { getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const category = categories.find(cat => cat.slug === slug);
  const products = getProductsByCategory(slug || '');

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium">Category not found</h1>
        <p className="mt-4 text-muted-foreground">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SectionTitle 
          title={category.name} 
          subtitle={category.description}
        />
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
