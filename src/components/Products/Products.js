import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';


const Products = () => {
  const [products]  = useState(productsData);



  return (
    <section>
      {products.map(product => <Product {...product} key={product.id}/>)}

    </section>
  );
};

// Products.propTypes = {

// }

export default Products;