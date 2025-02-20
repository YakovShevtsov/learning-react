import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, price } = props.item;

  const dispatch = useDispatch();

  const totalPrice = price * quantity;

  const handleAddItem = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}{" "}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleRemoveItem(props.item.id)}>-</button>
          <button onClick={() => handleAddItem(props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
