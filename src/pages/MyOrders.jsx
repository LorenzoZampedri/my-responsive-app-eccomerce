import { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("my-orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4">No hay órdenes registradas</h1>
        <p className="text-gray-600">Tu historial de compras aparecerá aquí.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mis órdenes</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg p-4 shadow-md space-y-2"
          >
            <h2 className="font-semibold text-lg">
              Orden #{order.id} - {order.date}
            </h2>
            <ul className="pl-4 list-disc">
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p className="font-bold">Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
