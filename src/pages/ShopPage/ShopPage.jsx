import css from "./ShopPage.module.css";
import Shops from "../../components/Shops/Shops";
import Flowers from "../../components/Flowers/Flowers";
export default function ShopPage() {
  return (
    <>
      <div className={css.container}>
        <Shops />
        <Flowers />
      </div>
    </>
  );
}
