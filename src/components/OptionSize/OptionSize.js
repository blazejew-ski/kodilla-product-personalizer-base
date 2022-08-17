import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = props => {

	return (
    <ul className={styles.choices}>
      {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => {props.setCurrentSize(size.name); props.setCurrentPrice(props.basePrice+size.additionalPrice); props.setAdditionalPrice(size.additionalPrice);}} className={clsx(props.prepareSizeClassNameActive(size.name), size.name === size.name,  )}>{size.name}</button></li>)}
    </ul>
	);
};

export default OptionSize