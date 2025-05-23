import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // API de prueba
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
  <div className="px-4 pb-32">
    {isLoading ? (
      <div className="flex justify-center items-center h-64">
        <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700" />
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
  </div>
  );

};

export default ProductList;
