import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
      <footer className="bg-white border border-t-2 py-8 pl-6 pr-6">
        <div className="container mx-auto px-4 lg:pl-20 lg:pr-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div>
              <h3 className="text-xl font-bold flex items-center space-x-2 mb-4">
                <span className="text-teal-500">
                  <img src="/icons/logo.jpg" alt="Comforty Logo" className="h-8 w-8" />
                </span>
                <span className="text-black">Comforty</span>
              </h3>
              <p className="text-gray-500 text-sm">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus.
              </p>
              <div className="flex space-x-4 mt-8 text-xl">
                <a href="#" className="text-gray-500 hover:text-teal-500">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                <GrTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                <FaInstagram />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                <FaPinterest />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                <FaYoutube />
                </a>
              </div>
            </div>
  
            {/* Category Section */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-500">Category</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-teal-500">Sofa</a></li>
                <li><a href="#" className="hover:text-teal-500">Armchair</a></li>
                <li><a href="#" className="hover:text-teal-500">Wing Chair</a></li>
                <li><a href="#" className="hover:text-teal-500">Desk Chair</a></li>
                <li><a href="#" className="hover:text-teal-500">Wooden Chair</a></li>
                <li><a href="#" className="hover:text-teal-500">Park Bench</a></li>
              </ul>
            </div>
  
            {/* Support Section */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-500">Support</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-teal-500">Help & Support</a></li>
                <li><a href="#" className="hover:text-teal-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-500">Help</a></li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-500">Newsletter</h4>
              <div className="flex space-x-2 mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
          <div className="border-t mt-10 pt-4 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center lg:text-left">
              © 2021 - Blogy - Designed & Developed by <span className="font-bold text-black">Zakirsoft</span></p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <img src="/icons/paypal.png" alt="PayPal" className="h-8  " />
              <img src="/icons/american.jpg" alt="PayPal" className="h-8 w-20 " />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  