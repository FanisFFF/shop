import { Link } from "react-router-dom";
import CategoryItem from "../category-item/categoryItem.component";
import "./categoryPreview.style.scss";
import { CategoryItem as TCategoryItem } from "../../store/cart.types";
import { FC } from "react";

type CategoryPreviewProps = {
  title: string;
  items: TCategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, items }) => {
  // const categoryData = props.element;
  return (
    <div className="category-preview">
      <Link className="category-name" to={`${title.toLowerCase()}`}>
        {title}
      </Link>
      <div className="category-row">
        {items.map((el) => (
          <CategoryItem key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
