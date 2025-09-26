import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
    {
      name: "T-shirt",
      size: "XL",
      color: "Gray",
      price: 20,
      image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
    {
      name: "Casual Sneakers",
      size: "M",
      color: "White",
      price: 60,
      image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
    },
  ],
  totalPrice: 200,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutID, setCheckoutID] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (event) => {
    event.preventDefault();
    setCheckoutID(123);
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl uppercase mb-6">Checkout</h2>
          <form action="" onSubmit={handleCreateCheckout}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email"
                value="user@example.com"
                className="w-full p-2 bg-gray-100 text-gray-500 border border-gray-200 rounded"
                disabled
              />
            </div>
            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 flex gap-4">
              <div>
                <label htmlFor="" className="block text-gray-700">First Name</label>
                <input 
                  type="text"
                  value={shippingAddress.firstName}
                  className="w-full p-2 border border-gray-200 rounded"
                  onChange={(event) => setShippingAddress({...shippingAddress, firstName: event.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">Last Name</label>
                <input 
                  type="text"
                  value={shippingAddress.lastName}
                  className="w-full p-2 border border-gray-200 rounded"
                  onChange={(event) => setShippingAddress({...shippingAddress, lastName: event.target.value})}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input 
                type="text"
                value={shippingAddress.address}
                onChange={(event) => 
                  setShippingAddress({
                    ...shippingAddress,
                    address: event.target.value
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input 
                  type="text"
                  value={shippingAddress.city}
                  onChange={(event) => 
                    setShippingAddress({
                      ...shippingAddress,
                      city: event.target.value
                    })
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Postal Code</label>
                <input 
                  type="number"
                  value={shippingAddress.postalCode}
                  onChange={(event) => 
                    setShippingAddress({
                      ...shippingAddress,
                      postalCode: event.target.value
                    })
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input 
                type="text"
                value={shippingAddress.country}
                onChange={(event) => 
                  setShippingAddress({
                    ...shippingAddress,
                    country: event.target.value
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone number</label>
              <input 
                type="number"
                value={shippingAddress.phone}
                onChange={(event) => 
                  setShippingAddress({
                    ...shippingAddress,
                    phone: event.target.value
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="mt-8">
              { !checkoutID ? (
                <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment</button>
              ) : (
                <div>
                  <h3 className="text-lg mb-4">Pay with Paypal</h3>
                </div>
              ) }
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Checkout;
