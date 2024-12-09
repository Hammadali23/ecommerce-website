export default function Ourproduct() {
    const products = [
      {
        id: 1,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: "New",
        image: "/icons/chairproduct.jpeg",
      },
      {
        id: 2,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 30,
        tag: "Sales",
        image: "/icons/chairproduct2.jpeg",
      },
      {
        id: 3,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: null,
        image: "/icons/chairproduct3.jpeg",
      },
      {
        id: 4,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: null,
        image: "/icons/chairproduct4.jpeg",
      },
      {
        id: 5,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: "New",
        image: "/icons/category1.jpeg",
      },
      {
        id: 6,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 39,
        tag: "Sales",
        image: "/icons/chairproduct5.jpeg",
      },
      {
        id: 7,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: null,
        image: "/icons/chairproduct6.jpeg",
      },
      {
        id: 8,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        tag: null,
        image: "/icons/chairproduct.jpeg",
      },
    ];
  
    return (
      <div className="py-10 p-2 lg:ml-20 lg:mr-14">
        <h2 className="text-center text-3xl font-bold mb-8 text-black mt-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className=" rounded-lg overflow-hidden">
              <div className="relative">
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-semibold rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-lg text-black">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-black">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-500">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="rounded">
                    <i>
                      <img src="/icons/addcart.png" alt="addcart" width={20} height={20} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  