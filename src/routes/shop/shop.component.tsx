import CategoryPreview from "../../components/category-preview/categoryPreview.component.js";
/* eslint-disable */
//@ts-ignore
import data from "../../data.js";
/* eslint-enable */
import { CategoryItem } from "../../store/cart.types.js";
import "./shop.styles.scss";
const shopData: Tdata[] = data;
type Tdata = {
  title: string;
  items: CategoryItem[];
};

function Shop() {
  return (
    <>
      {shopData.map((el: Tdata) => (
        <CategoryPreview key={el.title} title={el.title} items={el.items} />
      ))}
    </>
  );
}
export default Shop;
