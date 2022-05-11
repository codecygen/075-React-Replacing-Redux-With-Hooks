import React, { useContext } from 'react';

import ProductsContext from '../context/products-context';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const productsCtx = useContext(ProductsContext);
  const productsList = productsCtx.products;


  return (
    <ul className="products-list">
      {productsList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
