import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button
      className={classes.button}
      onClick={toggleCart}
    >
      <span>My Cart</span>
      {totalQuantity > 0 && (
        <span className={classes.badge}>{totalQuantity}</span>
      )}
    </button>
  );
};

export default CartButton;
