import { FaMeta } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaMeta className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaXTwitter className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm flex-grow text-center">
          <span>We ship worldwide - Fast and reliable shipping</span>
        </div>
        <div className="hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300">+1234567890</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
