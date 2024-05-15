import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearCartItem,
  removeItemFromCart,
} from "../../store/store";
import "./checkout-item.styles.scss";
import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart.types";

type CheckoutItemProps = {
  product: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt="" />
      <h2>{name}</h2>
      <div className="quantity-container">
        <button onClick={() => dispatch(removeItemFromCart(product))}>❮</button>
        <p>Quantitiy: {quantity ? quantity : 0}</p>
        <button onClick={() => dispatch(addItemToCart(product))}>❯</button>
      </div>
      <div>
        <button onClick={() => dispatch(clearCartItem(product))}>✕</button>
      </div>
      <p>{price * quantity}$</p>
    </div>
  );
};
export default CheckoutItem;
