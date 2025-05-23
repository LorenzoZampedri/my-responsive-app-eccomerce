import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 8);
      setProducts(selected);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);


  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="relative bg-gray-100 p-4 rounded-md shadow-md">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-0 h-full w-10 flex items-center justify-center bg-gray-300 hover:bg-gray-350 transition-opacity opacity-70 hover:opacity-100"
        aria-label="Scroll Left"
      >
        <FontAwesomeIcon
          icon={faLeftLong}
          style={{ color: "#000000" }}
        />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-hidden space-x-4 px-8"
      >
        {products.map((product) =>
          product ? (
            <div key={product.id} className="w-[250px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ) : null
        )}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-gray-300 hover:bg-gray-350 transition-opacity opacity-70 hover:opacity-100"
        aria-label="Scroll Right"
      >
        <FontAwesomeIcon
          icon={faLeftLong}
          flip="horizontal"
          style={{ color: "#000000" }}
        />
      </button>
    </div>
  );
}
