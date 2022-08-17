import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';
import { useMemo } from "react";

const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState(props.sizes[0].additionalPrice);

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

  const getPrice = useMemo(() => {
    return (
      props.basePrice +
      additionalPrice
    );
  }, [currentPrice]);

  // function getPrice(additionalPrice) {
  //   console.log(additionalPrice);
  //   setCurrentPrice(props.basePrice + additionalPrice);
  // }

  // const memoPrice = useMemo(() => getPrice(additionalPrice), [additionalPrice])

  // const getPrice = useMemo((additionalPrice) => {
  //   console.log(additionalPrice);
  //   setCurrentPrice(props.basePrice + additionalPrice);
  // }, [currentPrice])

  const addToCart = e => {
    e.preventDefault();
    console.log(
      'Summary:', '\n',
      '=-=-=-=-=-=-=-=', '\n',
      'Name: ', props.title, '\n',
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
          <span className={styles.price}>Price: {getPrice}</span>
        </header>
        <ProductForm sizes={props.sizes} title={props.title} setCurrentSize={setCurrentSize} basePrice={props.basePrice} prepareSizeClassNameActive={prepareSizeClassNameActive} colors={props.colors} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} prepareColorClassNameActive={prepareColorClassNameActive} currentSize={currentSize} currentColor={currentColor} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} addToCart={addToCart} setAdditionalPrice={setAdditionalPrice}/>
      </div>
    </article>
  )
};

export default Product;

