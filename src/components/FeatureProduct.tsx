import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    image: '/icons/chairproduct.jpeg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 30,
    originalPrice: 20,
    image: '/icons/chairproduct2.jpeg',
    onSale: true,
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    image: '/icons/chairproduct3.jpeg',
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    image: '/icons/chairproduct4.jpeg',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-4 text-black">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}