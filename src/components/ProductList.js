import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List:</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
