import { useDispatch } from "react-redux";
import "./button.styles.scss";
import { addItemToCart } from "../../store/store";
import { FC } from "react";
import { CategoryItem as TCategoryItem } from "../../store/cart.types";
type CategoryItemProps = {
  product: TCategoryItem;
};

const Button: FC<CategoryItemProps> = ({ product }) => {
  // function Button({ product }): FC<CategoryItemProps> {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(addItemToCart(product))}
        className="button"
      >
        Add Item
      </button>
    </>
  );
};
export default Button;
