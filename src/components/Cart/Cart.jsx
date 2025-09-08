import css from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../../redux/cart/slice";
import { selectCart } from "../../redux/cart/selectors";

export default function Cart() {
  const items = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className={css.list}>
          {items.map((item) => (
            <li key={item._id} className={css.item}>
              <img
                className={css.image}
                src={item.imageURL}
                alt={item.name}
                width="50"
              />
              <div>
                <h4>{item.name}</h4>
                <p className={css.price}>
                  Price: {item.price} × {item.quantity}
                </p>
                <div className={css.buttonBlock}>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                >
                  −
                </button>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  Delete
                </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* {items.length > 0 && (
        <button type="button" onClick={() => dispatch(clearCart())}>Clear cart</button>
      )} */}
    </div>
  );
}
