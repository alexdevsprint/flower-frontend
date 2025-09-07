import css from "./Shops.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchShops } from "../../redux/shops/operations";
import { selectShopsAll } from "../../redux/shops/selectors";

import { fetchFlowersByShop } from "../../redux/flowers/operations";



export default function Shops() {
  const dispatch = useDispatch();

  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [selectedShopId, setSelectedShopId] = useState(null);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);
  const shops = useSelector(selectShopsAll);
  useEffect(() => {
    if (!initialLoadDone && Array.isArray(shops) && shops.length > 0) {
      const firstShopId = shops[0]._id;
      dispatch(fetchFlowersByShop(firstShopId));
      setSelectedShopId(firstShopId);
      setInitialLoadDone(true); 
    }
  }, [shops, dispatch, initialLoadDone]);

  const handleShopClick = (id) => {
    console.log("Выбран магазин с id:", id);
    setSelectedShopId(id);
    dispatch(fetchFlowersByShop(id));
    
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Shops:</h3>

      <ul className={css.list}>
        {Array.isArray(shops) &&
          shops.map((item) => (
            <li
              className={`${css.item} ${selectedShopId === item._id ? css.selected : ''}`}
              key={item._id}
              onClick={() => handleShopClick(item._id)}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
