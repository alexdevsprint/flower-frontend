import css from './Flowers.module.css'
import { selectFlowers } from "../../redux/flowers/selectors";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/slice";

export default function Flowers() {
  const flowers = useSelector(selectFlowers);
  console.log(flowers);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
  dispatch(addToCart(item));
};


  return (
    <div className={css.container}>      
      <ul>
        {Array.isArray(flowers) &&
          flowers.map((item) => (
            <li className={css.item} key={item._id}>
              <img className={css.image} src={item.imageURL} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to cart</button>
              
            </li>
          ))}
      </ul>
    </div>
  );
}
