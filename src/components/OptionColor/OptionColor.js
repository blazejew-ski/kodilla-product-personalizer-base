import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

	return (
    <ul className={styles.choices}>
      {props.colors.map(color => <li key={color}><button type="button" onClick={() => {props.setCurrentColor(color);}} className={clsx(props.prepareColorClassName(color), color === color, props.prepareColorClassNameActive(color), color === color)} /></li>)}
    </ul>
	);
};

export default OptionColor