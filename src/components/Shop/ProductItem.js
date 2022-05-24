import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-Slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartItem = () => {
    dispatch(cartActions.addToCart({
      id,
      title,
      price,
      description
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type='button' onClick={addToCartItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
