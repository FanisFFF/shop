import "./category-item.styles.scss";
import Button from "../button/button.component";
import { FC } from "react";
import { CategoryItem as TCategoryItem } from "../../store/cart.types";

type CategoryItemProps = {
  product: TCategoryItem;
};

const CategoryItem: FC<CategoryItemProps> = ({ product }) => {
  const { imageUrl, name, price } = product;

  return (
    <div className="category-item">
      <img className="category-item-image" src={imageUrl} alt="" />
      <h2>{name}</h2>
      <p>{price}$</p>
      <Button product={product} />
    </div>
  );
};

export default CategoryItem;
