import css from './Flowers.module.css'
import { selectFlowers } from "../../redux/flowers/selectors";
import { useSelector} from "react-redux";
export default function Flowers() {
  const flowers = useSelector(selectFlowers);
  console.log(flowers);
  return (
    <div className={css.container}>      
      <ul>
        {Array.isArray(flowers) &&
          flowers.map((item) => (
            <li className={css.item} key={item._id}>
              <img className={css.image} src={item.imageURL} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button>Add to cart</button>
              
            </li>
          ))}
      </ul>
    </div>
  );
}
