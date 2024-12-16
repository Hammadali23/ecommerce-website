export default function About() {
  return (
    <div>
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row lg:px-52 bg-white p-8">
        <div className="w-full md:w-1/2 bg-cyan-800 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-sm leading-relaxed mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort.
            Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs
            that seamlessly blend style with functionality.
          </p>
          <button className="bg-cyan-700 hover:bg-cyan-600 text-white py-2 px-6 rounded w-fit">
            View collection
          </button>
        </div>

        <div className="w-full md:w-1/2 lg:pl-4 lg:pt-0 pt-4">
          <img
            src="/icons/chairproduct.jpeg"
            alt="Chair Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="lg:pl-52 lg:pr-52 py-12 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          What Makes Our Brand Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 text-center rounded-lg shadow">
            <i className="fa-solid fa-truck text-4xl mb-4 text-cyan-800"></i>
            <h3 className="font-semibold text-lg text-cyan-700">Next day as standard</h3>
            <p className="text-cyan-800 text-sm mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 text-center rounded-lg shadow">
            <i className="fa-solid fa-check-circle text-4xl mb-4 text-cyan-800"></i>
            <h3 className="font-semibold text-lg text-cyan-800">Made by true artisans</h3>
            <p className="text-cyan-800 text-sm mt-2">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 text-center rounded-lg shadow">
            <i className="fa-solid fa-tags text-4xl mb-4 text-cyan-800"></i>
            <h3 className="font-semibold text-lg text-cyan-800">Unbeatable prices</h3>
            <p className="text-cyan-800 text-sm mt-2">
              For our materials and quality you won’t find better prices anywhere.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-6 text-center rounded-lg shadow">
            <i className="fa-solid fa-seedling text-4xl mb-4 text-cyan-800"></i>
            <h3 className="font-semibold text-lg text-cyan-800">Recycled packaging</h3>
            <p className="text-cyan-800 text-sm mt-2">
              We use 100% recycled to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </div>

      {/* Our Popular Products */}
<div className="lg:pl-52 lg:pr-52 py-12 px-4 bg-white">
  <h2 className="text-2xl  font-bold text-gray-900 mb-8">Our Popular Products</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Product 1 */}
    <div className="flex flex-col">
      <img
        src="/icons/popularsofa.jpeg"
        alt="The Poplar suede sofa"
        className="lg:w-full lg:h-72 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-lg font-medium text-gray-800">The Poplar suede sofa</h3>
      <p className="text-gray-600">$99.00</p>
    </div>

    {/* Product 2 */}
    <div className="flex flex-col">
      <img
        src="/icons/dandychair.jpeg"
        alt="The Dandy chair"
        className="lg:w-60 lg:h-72 object-cover mb-4 lg:ml-52 rounded-lg"
      />
      <h3 className="text-lg font-medium text-gray-800 lg:ml-52">The Dandy chair</h3>
      <p className="text-gray-600 lg:ml-52">$99.00</p>
    </div>

    {/* Product 3 */}
    <div className="flex flex-col">
      <img
        src="/icons/dandychair2.jpeg"
        alt="The Dandy chair"
        className="lg:w-60 lg:h-72 object-cover mb-4 lg:ml-28 rounded-lg"
      />
      <h3 className="text-lg font-medium text-gray-800 lg:ml-28">The Dandy chair</h3>
      <p className="text-gray-600 lg:ml-28">$99.00</p>
    </div>
  </div>
</div>

      </div>
    
  );
}
