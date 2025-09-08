import css from './Cart.module.css';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../../redux/cart/slice";
import { selectCart } from "../../redux/cart/selectors";

export default function Cart() {
    const items = useSelector(selectCart);
     const dispatch = useDispatch();
  return (
     <div className={css.container}>      
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <img className={css.image} src={item.imageURL} alt={item.name} width="50" />
              <p>{item.name}</p>
              <p>Цена: {item.price} × {item.quantity}</p>
              <button onClick={() => dispatch(decreaseQuantity(item._id))}>−</button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item._id))}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
      )}
    </div>

  );
}
