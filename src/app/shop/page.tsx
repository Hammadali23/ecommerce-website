export default function ShopPage() {
    const featuredProducts = [
      { id: 1, image: '/icons/chairproduct6.jpeg', name: 'Library Stool Chair', price: '$99' },
      { id: 2, image: '/icons/chairproduct.jpeg', name: 'Office Chair', price: '$120' },
      { id: 3, image: '/icons/category3.png', name: 'Study Chair', price: '$80' },
      { id: 4, image: '/icons/chairproduct3.jpeg', name: 'Dining Chair', price: '$60' },
      { id: 5, image: '/icons/category1.jpeg', name: 'Gaming Chair', price: '$150' },
    ];
  
    return (
      <div className="font-sans lg:p-12 p-4 bg-white">
        {/* Top Product Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-12 lg:pl-40 lg:pr-40 pt-6">
            <img
            src="/icons/chairproduct2.jpeg"
            alt="Library Stool Chair"
            className="lg:w-[40%] lg:h-96 object-cover rounded-lg shadow-md order-1 md:order-1 "
          />
          <div className="space-y-4 order-2 md:order-2 text-center md:text-left lg:pl-12">
            <h1 className="lg:text-5xl text-4xl font-bold text-black">Library Stool <br /> Chair</h1>
            <p className="text-white bg-cyan-600 inline-block p-1 rounded-full font-semibold">$20.00 USD</p>
            <p className="text-gray-600 max-w-md pt-4 pb-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500 transition">
              🛒 Add To Cart
            </button>
          </div>
        </div>
  
        {/* Featured Products Section */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-black lg:pl-36 lg:ml-2 pt-4">FEATURED PRODUCTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:pl-36 lg:pr-40 gap-4">
            {/* Product Cards */}
            {featuredProducts.map((product) => (
              <div key={product.id} className="text-center rounded-lg  bg-white ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-md mb-2"
                />
                <p className="text-black text-start">{product.name}</p>
                <p className="font-bold text-black text-start">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  