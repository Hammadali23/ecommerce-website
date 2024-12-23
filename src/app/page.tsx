import Feature from "../components/FeatureProduct";
import TopCategories from "../components/TopCategories";
import ProductCollage from "../components/ProductCollage";
import Ourproduct from "../components/Ourproduct";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto  sm:px-6">
        <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:p-28 p-12 rounded-xl">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase">Welcome to Chairy</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Best Furniture <br /> Collection For Your <br />Interior.
            </h1>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-teal-700 transition">
              <span>Shop Now</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/icons/chair.png"
              alt="Chair"
              className="rounded-lg"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-white">
          <div className="py-16">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <img src="/icons/zapier.png" alt="Zapier" className="h-10" />
              <img src="/icons/pipedrive.png" alt="Pipedrive" className="h-8" />
              <img src="/icons/cibbank.png" alt="CIB Bank" className="h-16" />
              <img src="/icons/z.png" alt="z" className="h-16" />
              <img src="/icons/burnt.png" alt="Burnt Toast" className="h-20" />
              <img src="/icons/panda.png" alt="Panda" className="h-8" />
              <img src="/icons/moz.png" alt="moz" className="h-6" />
            </div>
          </div>

          {/* Features Section */}
          <div>
            <Feature />
          </div>

          {/* Top Categories Section */}
          <div>
            <TopCategories />
          </div>

          {/* Product Collage Section */}
          <div>
            <ProductCollage />
          </div>

          {/* Our Products Section */}
          <div>
            <Ourproduct />
          </div>
        </div>
      </div>
    </div>
  );
}