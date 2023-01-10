import React, { useState } from 'react';
import Product from './Product';

function InventoryBoard() {
  const [products, setProducts] = useState([
    { name: 'Product 1', stock: 10 },
    { name: 'Product 2', stock: 5 }
  ]);

  const updateStock = (index) => {
    setProducts(newProducts);
  };

  return (
    <div>
      <h1>Inventory Board</h1>
      {products.map((product, index) => (
        <Product
          key={product.name}
          name={product.name}
          stock={product.stock}
          onStockUpdate={() => updateStock(index)}
        />
      ))}
    </div>
  );
}

export default InventoryBoard();
