import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="border bg-white rounded-lg p-4 shadow hover:shadow-2xl transition flex flex-col h-full min-h-[370px] ">
        <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-4"
        />
        <h2 className="text-base font-semibold mb-2">{product.title}</h2>
        <p className="text-center mt-auto text-gray-800 font-bold mb-4">${product.price}</p>
        <div className="mt-auto flex items-center justify-center">
            <button onClick={() => addToCart(product)} className="CartBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(255, 255, 255)" className="cart">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
            </span>
            <p className="text">Agregar al carrito</p>
        </button>
        </div>
        </div>
    );
}
