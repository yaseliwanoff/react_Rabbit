import { useState, useRef, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const newArrivals = [
    {
      _id: "0",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
          altText: "Stylysh Jacket"
        },
      ],
    },
  ];

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    updateScrollButtons();
  };

  const handleNouseUpOrLeave = () => {
    setIsDragging(false);
    updateScrollButtons();
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setCanScrollLeft(scrollLeft > 0);
    
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;

    container.addEventListener("scroll", updateScrollButtons);

    updateScrollButtons();

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-lg border border-gray-200 ${
              canScrollLeft 
                ? "bg-white text-black hover:bg-gray-50 cursor-pointer" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-lg border border-gray-200 ${
              canScrollRight 
                ? "bg-white text-black hover:bg-gray-50 cursor-pointer" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleNouseUpOrLeave}
        onMouseLeave={handleNouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative hide-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-default"}`}
      >
        { newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img 
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md text-black p-4 rounded-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default NewArrivals;
