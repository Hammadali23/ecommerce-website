import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Wing Chair',
    image: '/icons/category1.jpeg',
    productCount: 3584,
  },
  {
    id: 2,
    title: 'Wooden Chair',
    image: '/icons/category2.jpeg',
    productCount: 157,
  },
  {
    id: 3,
    title: 'Desk Chair',
    image: '/icons/category3.png',
    productCount: 154,
  },
];

export default function TopCategories() {
  return (
    <div className="my-8 px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-black">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
