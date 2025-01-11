type Category = {
    id: number;
    title: string;
    image: string;
    productCount: number;
  };
  
  export default function CategoryCard({ category }: { category: Category }) {
    return (
      <div className="relative group  cursor-pointer bg-white shadow rounded-lg overflow-hidden">
        {/* Category Image */}
        <img
          src={category.image}
          alt={category.title}
          className="w-full lg:h-96 h-96  object-cover"
        />
  
        {/* Category Info */}
        <div className=" absolute inset-0 bg-transparent flex-row  lg:pt-80 pt-80 hover:bg-gray-200 hover:opacity-50 ">
          <div className="text-white bg-black bg-opacity-50 p-2 rounded-lg ">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-sm">{category.productCount} Products</p>
          </div>
          </div>
        </div>
      
    );
  }
  