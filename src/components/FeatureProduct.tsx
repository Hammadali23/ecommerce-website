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
    price: 20,
    originalPrice: 30,
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
    <div className="lg:ml-16 lg:mr-16">
      <h2 className="text-2xl font-bold mb-4 lg:ml-2 p-2 text-black ">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
