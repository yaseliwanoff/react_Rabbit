import { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from "./SearchBar"
import CartDrawer from "../Layout/CartDrawer"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const handleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }
    
  const handleCartDrawerToggle = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div>
          <Link to={"/"} className="text-2xl font-medium">Rabbit</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to={"/collections/all"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Men
          </Link>
          <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Women
          </Link>
          <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Top Wear
          </Link>
          <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>
          <button onClick={handleCartDrawerToggle} className="relative cursor-pointer hover:text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 border-2 border-white bg-rabbit-red text-white text-xs rounded-full px-1.5 py-0.5">3</span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button onClick={handleNavDrawer} className="cursor-pointer md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={cartDrawerOpen} toggleCartDrawer={handleCartDrawerToggle} />
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={handleNavDrawer}>
            <IoMdClose className="cursor-pointer w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to={"/collections/all"} onClick={handleNavDrawer} className="block text-gray-600 uppercase hover:text-black">
              Men
            </Link>
            <Link to={"#"} onClick={handleNavDrawer} className="block text-gray-600 uppercase hover:text-black">
              Women
            </Link>
            <Link to={"#"} onClick={handleNavDrawer} className="block text-gray-600 uppercase hover:text-black">
              To Wear
            </Link>
            <Link to={"#"} onClick={handleNavDrawer} className="block text-gray-600 uppercase hover:text-black">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar;
