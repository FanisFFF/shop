import { useParams } from "react-router-dom";

/*eslint-disable*/
//@ts-ignore
import data from "../../data.js";
/*eslint-enable*/
import "./category.styles.scss";
import {
  CategoryItem as TCategoryItem,
  DirectoryItem,
} from "../../store/cart.types.js";
import CategoryItem from "../../components/category-item/categoryItem.component.js";
function Category() {
  const categoryId = useParams();
  const item = data.filter(
    (el: DirectoryItem) => el.title.toLowerCase() == categoryId.id
  );
  return (
    <div className="category-preview">
      <h2 className="category-name">{item[0].title}</h2>
      <div className="category-row">
        {item[0].items.map((el: TCategoryItem) => (
          <CategoryItem key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
}
export default Category;
