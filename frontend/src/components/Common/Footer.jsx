import { Link } from "react-router-dom"
import { FaMeta } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhoneCall } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">Sign up and get 10% off your first order</p>
          <form action="" className="flex">
            <input type="email" placeholder="example@email.com" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" />
            <button type="submit" className="cursor-pointer bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800">Subscribe</button>
          </form>
        </div>
        <div>
          <h3 className="text-lg text-gray-600 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Men's top Wear</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Women's top Wear</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Men's bottom Wear</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Women's bottom Wear</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-600 mb-4">Suppor</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Contact us</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">About us</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">FAQ's</Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300"
            >
              <FaMeta className="cursor-pointer w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300"
            >
              <FaInstagram className="cursor-pointer w-4 h-4" />
            </a>
            <a 
              href="https://www.twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300"
            >
              <FaXTwitter className="cursor-pointer w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500 mb-2">Call us</p>
          <p className="font-semibold">
            <FiPhoneCall className="w-5 h-5 inline-block mr-2" />
            0123-456-78-90
          </p>
        </div>
      </div>
      <div className="container mx-auto my-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          © 2026, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
