import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FiltersSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 1000,
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Brown", "Pink", "White", "Gray", "Black", "Blue", "Purple", "Indigo"];
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const materials = [
    "Cottom",
    "Wool",
    "Denim",
    "Polyester",
    "Linen",
    "Silk",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 1000,
    });
    setPriceRange([0, params.maxPrice || 1000]);
  }, [searchParams]);

  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    let newFilters = { ...filter };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    
    setFilter(newFilters);
    updateURLParams(newFilters);
  }

  const updateURLParams = (newFilter) => {
    const params = new URLSearchParams();

    Object.keys(newFilter).forEach((key) => {
      if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
        params.set(key, newFilter[key].join(","));
      } else if (newFilter[key]) {
        params.set(key, newFilter[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center text-sm mb-1">
            <input 
              type="radio" 
              name="category" 
              checked={filter.category === category}
              value={category} 
              onChange={handleFilterChange} 
              className="mr-2 h-4 w-5 text-blue-500 focus:ring-blue-400 border-gray-300" 
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center text-sm mb-1">
            <input 
              type="radio" 
              name="gender" 
              checked={filter.gender === gender} 
              value={gender} 
              onChange={handleFilterChange} 
              className="mr-2 h-4 w-5 text-blue-500 focus:ring-blue-400 border-gray-300" 
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button 
              key={color}
              onClick={() => {
                const newFilter = {...filter, color};
                setFilter(newFilter);
                updateURLParams(newFilter);
              }}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer transition hover:scale-105 ${
                filter.color === color ? "border-blue-500" : "border-gray-200"
              }`}
              style={{backgroundColor: color.toLowerCase()}}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Size's</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center text-sm mb-1">
            <input 
              type="checkbox" 
              name="size" 
              checked={filter.size.includes(size)} 
              value={size} 
              onChange={handleFilterChange} 
              className="mr-2 h-4 w-5 text-blue-500 focus:ring-blue-400 border-gray-300" 
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Material's</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center text-sm mb-1">
            <input 
              type="checkbox" 
              name="material" 
              checked={filter.material.includes(material)}
              value={material} 
              onChange={handleFilterChange} 
              className="mr-2 h-4 w-5 text-blue-500 focus:ring-blue-400 border-gray-300" 
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">Brand's</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center text-sm mb-1">
            <input 
              type="checkbox" 
              name="brand" 
              checked={filter.brand.includes(brand)}
              value={brand} 
              onChange={handleFilterChange} 
              className="mr-2 h-4 w-5 text-blue-500 focus:ring-blue-400 border-gray-300" 
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>
      
      <div className="mb-8">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input 
          type="range" 
          name="priceRange" 
          min={0} 
          max={1000}
          value={priceRange[1]}
          onChange={(e) => {
            const newPrice = parseInt(e.target.value);
            const newFilter = {...filter, maxPrice: newPrice};
            setPriceRange([0, newPrice]);
            setFilter(newFilter);
            updateURLParams(newFilter);
          }}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FiltersSidebar;
