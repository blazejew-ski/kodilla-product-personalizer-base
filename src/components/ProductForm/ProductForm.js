import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {

	return (
    <form onSubmit={props.addToCart}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} getPrice={props.getPrice} prepareSizeClassNameActive={props.prepareSizeClassNameActive}/>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} prepareColorClassNameActive={props.prepareColorClassNameActive}/>
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

export default ProductForm;