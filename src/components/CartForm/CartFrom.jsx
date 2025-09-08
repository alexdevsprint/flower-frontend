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
    <form onSubmit={handleSubmit}>
      <h3>CartForm</h3>
      <div>
        <label>
          {" "}
          Name:
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          {" "}
          Email:
          <input name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          {" "}
          Phone:
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          {" "}
          Address:
          <input name="address" value={form.address} onChange={handleChange} required />
        </label>
      </div>
      <Cart />
      <span>Total price: {totalPrice}</span>
      <button>Submit</button>
    </form>
  );
}
