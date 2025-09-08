import Cart from "../Cart/Cart";
export default function CartForm() {
  return (
    <div>
      <h3>CartForm</h3>
      <div>
        <label> Name:
            <input type="text" />
        </label>
        <label> Email:
            <input type="text" />
        </label>
        <label> Phone:
            <input type="text" />
        </label>
        <label> Address:
            <input type="text" />
        </label>        
      </div>
      <Cart />
      <span>Total price: </span>
      <button>Submit</button>
    </div>
  );
}
