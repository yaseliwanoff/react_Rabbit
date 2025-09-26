import { useEffect, useState } from "react"
import { toast } from "sonner"
import ProductGrid from "./ProductGrid";

const selectProduct = {
  name: "Stylish Jakcet",
  price: 120,
  originalPrice: 150,
  description: "This is stylish jacket for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "XL", "2XL", "3XL"],
  color: ["Indigo", "White", "Black", "Gray"],
  images: [
    {
      url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
      altText: "Stylish jacket product image 1",
    },
    {
      url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Hello+find+product+image",
      altText: "Stylish jacket product image 2",
    },
    {
      url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Mddw+find+product+image",
      altText: "Stylish jacket product image 3",
    },
    {
      url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=wcqc+find+product+image",
      altText: "Stylish jacket product image 4",
    },
  ],
};

const similarProducts = [
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
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please, select color and size", {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("This product success add to cart", {
        duration: 2000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity(prev => prev + 1);
    }

    if (action === "minus" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, [selectProduct])

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="hidden text- md:flex flex-col space-y-4 mr-6">
          {selectProduct.images.map((image, index) => (
            <img 
              key={index} 
              src={image.url} 
              alt={image.altText || `Thumbnail ${index}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-200"}`}
              onClick={() => setMainImage(image.url)}
            />
          ))}
        </div>
        <div className="md:w-1/2">
          <div className="mb-4">
            <img src={mainImage} alt="main product image" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
        <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
          {selectProduct.images.map((image, index) => (
            <img 
              key={index} 
              src={image.url} 
              alt={image.altText || `Thumbnail ${index}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-200"}`}
              onClick={() => setMainImage(image.url)}
            />
          ))}
        </div>
        <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectProduct.name}</h1>
          <p className="text-lg text-gray-600 mb-1 line-through">
            $ {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
          </p>
          <p className="text-xl text-gray-900 mb-2">
            $ {selectProduct.price}
          </p>
          <p className="text-gray-600 mb-4">
            {selectProduct.description}
          </p>
          <div className="mb-4">
            <p className="text-gray-700">Color:</p>
            <div className="flex gap-2 mt-2">
              {selectProduct.color.map((color) => (
                <button 
                  key={color} 
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border transition hover:opacity-85 cursor-pointer ${selectedColor === color ? "border-2 border-black" : "border border-gray-200"}`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                ></button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">Size:</p>
            <div className="flex gap-2 mt-2">
              {selectProduct.sizes.map((size) => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border transition hover:bg-gray-50 cursor-pointer ${selectedSize === size ? "bg-gray-100 border-gray-400" : "bg-white border-gray-200"}`}
                >{size}</button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-700">Quantity:</p>
            <div className="flex items-center space-x-4 mt-2">
              <button 
                onClick={() => handleQuantityChange("minus")} 
                className="px-2 py-1 cursor-pointer bg-gray-100 rounded text-lg"
                disabled={quantity <= 1}
              >-</button>
              <span className="text-lg">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange("plus")} 
                className="px-2 py-1 cursor-pointer bg-gray-100 rounded text-lg"
              >+</button>
            </div>
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 uppercase ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            >
              {isButtonDisabled ? "Adding..." : "Add to card"}
            </button>
          <div className="mt-10 text-gray-700">
            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
            <table className="w-full text-left text-sm text-gray-600">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectProduct.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
        <ProductGrid products={similarProducts} />
      </div>
    </div>
  )
}

export default ProductDetails;
