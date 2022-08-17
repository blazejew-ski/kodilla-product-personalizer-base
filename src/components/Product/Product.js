import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';

const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const title = props.title;

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const prepareSizeClassNameActive = size => {
    if (size === currentSize){
      return styles.active;
    }
    else {return ''};
  }

  const prepareColorClassNameActive = color => {
    if (color === currentColor){
      return styles.active;
    }
    else {return ''};
  }

  const getPrice = additionalPrice => {
    console.log(additionalPrice);
    setCurrentPrice(props.basePrice + additionalPrice);
  }

  const addToCart = e => {
    e.preventDefault();
    console.log(
      'Summary:', '\n',
      '=-=-=-=-=-=-=-=', '\n',
      'Name: ', title, '\n',
      'Price: ', currentPrice, '\n',
      'Size: ', currentSize, '\n',
      'Color: ', currentColor, '\n',
    );
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}</span>
        </header>
        <ProductForm sizes={props.sizes} title={props.title} setCurrentSize={setCurrentSize} getPrice={getPrice} prepareSizeClassNameActive={prepareSizeClassNameActive} colors={props.colors} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} prepareColorClassNameActive={prepareColorClassNameActive} currentSize={currentSize} currentColor={currentColor} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} addToCart={addToCart}/>
      </div>
    </article>
  )
};

export default Product;