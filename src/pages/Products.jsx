import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ← nuevo estado
  const [filters, setFilters] = useState({ category: "", minPrice: 0, maxPrice: 1000 });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // ← cuando terminan de cargar
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchCategory = !filters.category || product.category === filters.category;
    const matchMin = !filters.minPrice || product.price >= filters.minPrice;
    const matchMax = !filters.maxPrice || product.price <= filters.maxPrice;
    return matchCategory && matchMin && matchMax;
  });

  return (
    <div>
      <div className="text-center w-full bg-white shadow p-4 border-b mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>
        <p className="text-gray-600">Explorá nuestra colección completa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 px-4">
        
        {/* Filtro */}
        <div className="col-span-1 order-1 md:order-none">
          <ProductFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Productos */}
        <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 order-2 md:order-none">
          {loading ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              Cargando productos...
            </div>
          ) : (
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Columna vacía para balancear en desktop */}
        <div className="hidden md:block md:col-span-1" />
      </div>
    </div>
  );
}
