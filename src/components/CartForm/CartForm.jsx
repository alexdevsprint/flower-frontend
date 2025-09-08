import css from "./CartForm.module.css";
import Cart from "../Cart/Cart";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";
import { clearCart } from "../../redux/cart/slice";

export default function CartForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectCart);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...form,
      items,
      totalPrice,
    };

    try {
      const response = await fetch("https://flower-backend-fvzk.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке заказа");
      }

      const result = await response.json();
      alert("The order has been sent successfully!");
      dispatch(clearCart());
      setForm({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      alert("Failed to submit order!");
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.order}>
          <div className={css.inputs}>
            <div className={css.field}>
              <label htmlFor="name">Name:</label>
              <input
                className={css.input}
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={css.field}>
              <label htmlFor="email">Email:</label>
              <input
                className={css.input}
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={css.field}>
              <label htmlFor="phone">Phone:</label>
              <input
                className={css.input}
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={css.field}>
              <label htmlFor="phone">Address:</label>
              <input
                className={css.input}
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Cart />
        </div>
        <div className={css.price}>
          <span className={css.totalPrice}>Total price: {totalPrice}</span>
          <button className={css.button}>Submit</button>
        </div>
      </form>
    </>
  );
}
