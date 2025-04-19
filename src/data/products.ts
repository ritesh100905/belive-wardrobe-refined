
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Oversized Cotton T-shirt',
    price: 29.99,
    description: 'A comfortable oversized t-shirt made from 100% organic cotton.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000',
    ],
    category: 'men',
    tags: ['t-shirt', 'cotton', 'casual'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#ffffff' },
      { name: 'Navy', value: '#0a192f' },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 49.99,
    description: 'Classic slim fit jeans with a modern touch. Made from premium denim.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000',
      'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=1000',
    ],
    category: 'men',
    tags: ['jeans', 'denim', 'slim fit'],
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Blue', value: '#0e4c92' },
      { name: 'Black', value: '#000000' },
    ],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Floral Print Dress',
    price: 59.99,
    originalPrice: 79.99,
    description: 'A beautiful floral print dress, perfect for summer days.',
    images: [
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1000',
      'https://images.unsplash.com/photo-1623007725175-4a4aa30ae4b5?q=80&w=1000',
    ],
    category: 'women',
    tags: ['dress', 'floral', 'summer'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Floral', value: '#ff69b4' },
    ],
    isOnSale: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Classic White Sneakers',
    price: 69.99,
    description: 'Classic white sneakers that go with everything.',
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000',
      'https://images.unsplash.com/photo-1578116922645-3976907a7671?q=80&w=1000',
    ],
    category: 'accessories',
    tags: ['shoes', 'sneakers', 'white'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'White', value: '#ffffff' },
    ],
    isNew: true,
  },
  {
    id: '5',
    name: 'Kids Cartoon T-shirt',
    price: 19.99,
    description: 'Fun and colorful cartoon t-shirt for kids.',
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1000',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000',
    ],
    category: 'kids',
    tags: ['t-shirt', 'cartoon', 'colorful'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [
      { name: 'Yellow', value: '#ffd700' },
      { name: 'Blue', value: '#1e90ff' },
    ],
    isNew: true,
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Elegant leather crossbody bag with multiple compartments.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000',
      'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=1000',
    ],
    category: 'accessories',
    tags: ['bag', 'leather', 'crossbody'],
    sizes: ['One Size'],
    colors: [
      { name: 'Brown', value: '#8b4513' },
      { name: 'Black', value: '#000000' },
    ],
    isOnSale: true,
  },
  {
    id: '7',
    name: 'Knitted Sweater',
    price: 79.99,
    description: 'Warm and cozy knitted sweater for colder days.',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000',
      'https://images.unsplash.com/photo-1599719500956-d158a3abd397?q=80&w=1000',
    ],
    category: 'women',
    tags: ['sweater', 'knitted', 'winter'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cream', value: '#fffdd0' },
      { name: 'Gray', value: '#808080' },
      { name: 'Pink', value: '#ffb6c1' },
    ],
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Stripe Button-Up Shirt',
    price: 45.99,
    description: 'Classic striped button-up shirt, perfect for office or casual wear.',
    images: [
      'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?q=80&w=1000',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000',
    ],
    category: 'men',
    tags: ['shirt', 'button-up', 'stripe'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blue Stripe', value: '#0074D9' },
      { name: 'White Stripe', value: '#f8f9fa' },
    ],
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.isOnSale);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
