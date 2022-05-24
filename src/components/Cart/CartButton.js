import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleButton = () => {
    dispatch(cartActions.cartToggle())
  }
  return (
    <button className={classes.button} onClick={toggleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
