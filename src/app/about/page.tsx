import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { RiSeedlingLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="bg-white">
      {/* About Us Section */}
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 xl:px-16 pt-14">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-cyan-800 text-white p-6 md:p-8 rounded-lg  ">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">About Us - Comforty</h2>
           <div className="flex flex-col lg:gap-y-24"> <p className="text-sm sm:text-base leading-relaxed mb-6">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort.
              Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs
              that seamlessly blend style with functionality.
            </p>
            <button className="bg-cyan-700 hover:bg-cyan-600 text-white py-2 px-6 rounded transition-colors w-fit  gap-y-10">
              View collection
            </button></div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/icons/chairproduct.jpeg"
              alt="Chair Image"
              className="w-full aspect-square lg:aspect-[4/3] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          What Makes Our Brand Different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 sm:p-8 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-cyan-800 mb-4">
              <TbTruckDelivery className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg text-cyan-700">Next day as standard</h3>
            <p className="text-cyan-800 text-sm sm:text-base mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 sm:p-8 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-cyan-800 mb-4">
              <IoIosCheckmarkCircleOutline className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg text-cyan-700">Made by true artisans</h3>
            <p className="text-cyan-800 text-sm sm:text-base mt-2">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 sm:p-8 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-cyan-800 mb-4">
              <GoCreditCard className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg text-cyan-700">Unbeatable prices</h3>
            <p className="text-cyan-800 text-sm sm:text-base mt-2">
              For our materials and quality you will not find better prices anywhere.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-6 sm:p-8 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-cyan-800 mb-4">
              <RiSeedlingLine className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg text-cyan-700">Recycled packaging</h3>
            <p className="text-cyan-800 text-sm sm:text-base mt-2">
              We use 100% recycled to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </div>

      {/* Our Popular Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
          Our Popular Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {/* Product 1 */}
          <div className="md:col-span-2 text-center">
            <img
              src="/icons/popularsofa.jpeg"
              alt="The Poplar suede sofa"
              className="w-full aspect-[16/7.7]   rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">The Poplar suede sofa</h3>
            <p className="text-gray-600">$99.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <img
              src="/icons/dandychair.jpeg"
              alt="The Dandy chair"
              className="w-full aspect-square   rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">The Dandy chair</h3>
            <p className="text-gray-600">$99.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <img
              src="/icons/dandychair2.jpeg"
              alt="The Dandy chair"
              className="w-full aspect-square rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">The Dandy chair</h3>
            <p className="text-gray-600">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
