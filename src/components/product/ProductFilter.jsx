import React, { useState } from 'react';

const ProductFilter = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false); // ← Estado para mostrar/ocultar en mobile

  const handleCategory = (cat) => {
    setFilters((prev) => ({ ...prev, category: cat }));
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="sticky top-20 p-4 bg-white shadow rounded h-fit">
      {/* Botón visible solo en mobile */}
      <button
        className="md:hidden w-full text-center font-bold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▲ Ocultar filtros ▲' : '▼ Mostrar filtros ▼'}
      </button>

      {/* Contenedor con lógica de visibilidad */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="font-bold text-lg mb-4">Filtrar por</h2>

        {/* Categorías */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Categoría</label>
          <div className="space-y-1">
            {[
              { label: 'Todas', value: '' },
              { label: 'Electrónica', value: 'electronics' },
              { label: 'Joyería', value: 'jewelery' },
              { label: 'Ropa Hombre', value: "men's clothing" },
              { label: 'Ropa Mujer', value: "women's clothing" },
            ].map((cat) => (
              <button
                key={cat.value}
                className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                onClick={() => handleCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rango de precio */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Rango de precio</label>
          <div className="flex flex-col gap-2">
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={filters.minPrice || 0}
              onChange={(e) => handlePriceChange(e, 'minPrice')}
              className="w-full"
            />
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={filters.maxPrice || 1000}
              onChange={(e) => handlePriceChange(e, 'maxPrice')}
              className="w-full"
            />
            <div className="text-sm text-gray-600">
              De ${filters.minPrice || 0} a ${filters.maxPrice || 1000}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
