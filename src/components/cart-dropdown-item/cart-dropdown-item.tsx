import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart.types";

type CartDropdownProps = {
  product: TCartItem;
};

const CartDropdownItem: FC<CartDropdownProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        {product.quantity} x {product.price}$
      </p>
    </div>
  );
};
export default CartDropdownItem;
