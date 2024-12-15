export default function About() {
    return(
      <div className="flex flex-col md:flex-row lg:px-52 bg-white p-8">
  
  <div className="w-full md:w-1/2 bg-cyan-800 text-white p-8 flex flex-col justify-center ">
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

  <div className="w-full md:w-1/2 lg:pl-4 lg:pt-0 pt-4 ">
    <img 
      src="/icons/chairproduct.jpeg" 
      alt="Chair Image" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

    )
  }
  