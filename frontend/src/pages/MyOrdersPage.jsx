import { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAat: new Date(),
          shippingAddress: {city: "New York", country: "USA"},
          ordersItems: [
            {
              name: "Product 1",
              image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "67890",
          createdAat: new Date(),
          shippingAddress: {city: "Florida", country: "USA"},
          ordersItems: [
            {
              name: "Product 2",
              image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
            },
          ],
          totalPrice: 200,
          isPaid: true,
        },
        {
          _id: "45678",
          createdAat: new Date(),
          shippingAddress: {city: "Florida", country: "USA"},
          ordersItems: [
            {
              name: "Product 3",
              image: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image",
            },
          ],
          totalPrice: 420,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md shadow-gray-200 sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">States</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border border-gray-300 hover:border-gray-500 cursor-pointer">
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img src={order.ordersItems[0].image} alt={order.ordersItems[0].name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg" />
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">#{order._id}</td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 text-sm">
                    {new Date(order.createdAat).toLocaleDateString()}{" / "}
                    {new Date(order.createdAat).toLocaleTimeString()}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 text-sm">
                    {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 text-sm">{order.ordersItems.length}</td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 text-sm">${order.totalPrice}</td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4 text-sm">
                    <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-2 py-1 rounded text-xs sm:text-sm`}>{order.isPaid ? "Paid" : "Pending"}</span>
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan={7} className="py4 px-4 text-center text-gray-500">
                You have no orders
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrdersPage;
