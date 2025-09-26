import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleSearchToggle = () => {
    setIsOpenSearch(!isOpenSearch);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setIsOpenSearch(false);
  }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpenSearch ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
      {isOpenSearch ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input 
              type="text" 
              placeholder="Search" 
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button type="submit" className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
          <button 
            type="button"
            onClick={handleSearchToggle}
            className="absolute cursor-pointer right-4 top-1 transform -translate-y-1/2 text-gray-600 hover:text-black">
              <HiMiniXMark className="w-6 h-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle} className="cursor-pointer">
          <HiMagnifyingGlass className="w-6 h-6" />
        </button>
    )}
    </div>
  )
}

export default SearchBar;
