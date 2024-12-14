export default function ProductCollage() {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start pt-16  p-2 gap-4 lg:pl-24 lg:pr-16">
        {/* Left Section */}
        <div className="relative">
          <img
            src="/icons/chairproduct3.jpeg"
            alt="Large Chair"
            className="w-full h-full object-cover  "
          />
          {/* Vertical Text */}
          <div className="absolute -left-52 top-1/2 transform -rotate-90 text-2xl text-gray-700">
            Explore New and Popular Styles
          </div>
        </div>
  
        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/icons/chairproduct4.jpeg"
            alt="Chair 1"
            className="w-80 h-[100%] object-cover"
          />
          <img
            src="/icons/chairproduct.jpeg"
            alt="Chair 2"
            className="w-80 h-[100%] object-cover"
          />
          <img
            src="/icons/chairproduct5.jpeg"
            alt="Chair 3"
            className="w-80  h-[101%] object-cover"
          />
          <img
            src="/icons/chairproduct.jpeg"
            alt="Chair 4"
            className="w-64  h-[101%] object-cover"
          />
        </div>
      </div>
    );
  }
  