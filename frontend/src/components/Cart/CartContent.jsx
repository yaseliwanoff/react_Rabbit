import { MdDelete } from "react-icons/md";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://dummyimage.com/200x200/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "2XL",
      color: "Red",
      quantity: 3,
      price: 62,
      image: "https://dummyimage.com/200x200/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
    {
      productId: 3,
      name: "Jeans",
      size: "XL",
      color: "Black",
      quantity: 1,
      price: 20,
      image: "https://dummyimage.com/200x200/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
  ]
  return (
    <div>
      {
        cartProducts.map((product, index) => (
          <div key={index} className="flex items-start justify-between py-4 border-b border-gray-200">
            <div className="flex items-start">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-20 h-24 object-cover mr-4 rounded" 
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border cursor-pointer border-gray-200 rounded px-2 py-1 text-xl font-medium">-</button>
                  <span className="mx-4">{product.quantity}</span>
                  <button className="border cursor-pointer border-gray-200 rounded px-2 py-1 text-xl font-medium">+</button>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-1">$ {product.price.toLocaleString()}</p>
              <button className="cursor-pointer bg-red-100 hover:bg-red-200 rounded text-red-900 hover:text-red-700 p-2">
                <MdDelete />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartContent;
