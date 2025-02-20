import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { name, quantity, price, id } = props.item;

  const dispatch = useDispatch();

  const totalPrice = price * quantity;

  const handleAddItem = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
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
          <button onClick={() => handleRemoveItem(id)}>-</button>
          <button onClick={() => handleAddItem({ name, quantity, price, id })}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
