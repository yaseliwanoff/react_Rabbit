import { useEffect, useState, useRef } from "react"
import { FaFilter } from "react-icons/fa6"
import FiltersSidebar from "../components/Products/FiltersSidebar"
import SortOptions from "../components/Products/SortOptions"
import ProductGrid from "../components/Products/ProductGrid"

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleCkickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    // Add Event listener for clicks
    document.addEventListener("mousedown", handleCkickOutside);

    return () => {
      document.removeEventListener("mousedown", handleCkickOutside);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 5,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 6,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 7,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
        {
          _id: 8,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
        },
      ];
      setProducts(fetchedProducts)
    }, 1000);
  }, []);

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <button onClick={handleSidebar} className="lg:hidden mt-2.5 cursor-pointer border gap-2 border-gray-200 p-2 rounded flex justify-center items-center">
          <FaFilter />
          Filters
        </button>
        <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-[400px] bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
          <FiltersSidebar />
        </div>
        <div className="flex-grow p-4">
          <div className="flex justify-between items-center px-4">
            <h2 className="text-2xl uppercase mb-4">All Collection</h2>
            <SortOptions />
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  )
}

export default CollectionPage;
