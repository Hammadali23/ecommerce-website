import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
export default function contactUs(){
    return(
        <div className="bg-white mx-auto px-4 py-12">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-black  lg:pl-96 lg:pr-96">Get In Touch With Us</h2>
  <p className="text-gray-600 text-center text-md mb-8  lg:pl-96 lg:pr-96">
    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
    Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </p>

  <div className=" grid grid-cols-1 md:grid-cols-2 gap-8  lg:pl-96 lg:pr-96">
    
    <div className="space-y-6 text-black mt-8">
      <div className="flex items-start space-x-4">
        <span className="text-2xl "><FaLocationDot /></span>
        <div>
          <h3 className="font-bold">Address</h3>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-xl"><FaPhoneAlt /></span>
        <div>
          <h3 className="font-bold">Phone</h3>
          <p>Mobile: +(84) 546-6789</p>
          <p>Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-2xl"><MdWatchLater /></span>
        <div>
          <h3 className="font-bold">Working Time</h3>
          <p>Monday-Friday: 9:00 - 22:00</p>
          <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>

    <div>
      <form className="space-y-4 mt-8">
        <div>
          <label htmlFor="name" className="block text-md  text-gray-700 font-bold">Your name</label>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            className="mt-2 block w-full border border-black rounded-md focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-md font-bold text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Abc@def.com"
            className="mt-2 block w-full border border-black rounded-md  focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-md font-bold text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="This is an optional"
            className="mt-2 block w-full border border-black rounded-md  focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-md font-bold text-gray-700">Message</label>
          <textarea
            id="message"
            
            placeholder="Hi! I’d like to ask about"
            className="mt-2  block w-full border border-black rounded-md focus:border-teal-500 focus:ring-teal-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-44 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 f"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  <div>
  <div className="bg-gray-100 py-16 lg:ml-48 lg:mr-44 mt-12">
  <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-28 text-center">
   
  <div className="flex items-center space-x-4 justify-center">
      <span className="text-4xl text-gray-700"><img src="/icons/cup.png" alt="cup" /></span>
      <div>
        <h3 className="text-lg font-bold text-black">High Quality</h3>
        <p className="text-gray-600">crafted from top materials</p>
      </div>
    </div>
    
    <div className="flex items-center space-x-4 justify-center">
      <span className="text-4xl text-gray-700"><img src="/icons/warranty.png" alt="warranty" /></span>
      <div>
        <h3 className="text-lg font-bold text-black">Warranty Protection</h3>
        <p className="text-gray-600">Over 2 years</p>
      </div>
    </div>
    
    <div className="flex items-center space-x-4 justify-center">
      <span className="text-4xl text-gray-700"><img src="/icons/call.png" alt="call" /></span>
      <div>
        <h3 className="text-lg font-bold text-black">24 / 7 Support</h3>
        <p className="text-gray-600">Dedicated support</p>
      </div>
  </div>
</div>
</div>


  </div>
</div>


    )
}