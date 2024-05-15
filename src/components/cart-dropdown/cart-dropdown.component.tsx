import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item";
import { CartItem } from "../../store/cart.types";
import { Tstate } from "../../store/store";

function CartDropdown() {
  const cartItems = useSelector((state: Tstate) => state.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-scroll">
        {cartItems.map((el: CartItem) => (
          <CartDropdownItem key={el.id} product={el}></CartDropdownItem>
        ))}
      </div>
      <Link className="chekout-link" to="/checkout">
        Go To Checkout
      </Link>
    </div>
  );
}
export default CartDropdown;
