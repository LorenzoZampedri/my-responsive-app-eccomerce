import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "", minPrice: 0, maxPrice: 1000 });

  const filteredProducts = products.filter((product) => {
    const matchCategory = !filters.category || product.category === filters.category;
    const matchMin = !filters.minPrice || product.price >= filters.minPrice;
    const matchMax = !filters.maxPrice || product.price <= filters.maxPrice;
    return matchCategory && matchMin && matchMax;
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
  <div>
  <div className="text-center w-full bg-white shadow p-4 border-b mb-4">
    <h1 className="text-2xl font-bold">Productos</h1>
    <p className="text-gray-600">Explorá nuestra colección completa.</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-8 gap-4 px-4">
    
    {/* Filtro con orden para móviles */}
    <div className="col-span-1 order-1 md:order-none">
      <ProductFilter filters={filters} setFilters={setFilters} />
    </div>

    {/* Productos que ocupan el resto del ancho */}
    <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 order-2 md:order-none">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    {/* Columna vacía para balancear en desktop */}
    <div className="hidden md:block md:col-span-1" />
  </div>
</div>

  );
}
