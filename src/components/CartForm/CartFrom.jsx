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
      const response = await fetch("http://localhost:3000/orders", {
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
      alert("Заказ успешно отправлен!");
      dispatch(clearCart());
      setForm({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось отправить заказ");
    }
  };

  return (
    <>      
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.order}>
        <div className={css.inputs}>
          <div className={css.input}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={css.input}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.input}>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={css.input}>
            <label htmlFor="phone">Address:</label>
            <input
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
          <span>Total price: {totalPrice}</span>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
