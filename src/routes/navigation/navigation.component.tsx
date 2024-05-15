import { Link } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Tstate, setOpenCart } from "../../store/store";
import { SignOut } from "../../utils/firebase.utils";
function Navigation() {
  const isCartOpen = useSelector((state: Tstate) => state.isOpen);
  const currentUser = useSelector((state: Tstate) => state.currentUser);
  const itemsQuantity = useSelector((state: Tstate) => state.cartItems.length);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <nav className="navigation">
          <div className="logo-container">
            <Link className="logo" to="/">
              clothing
            </Link>
          </div>
          <div className="links">
            <Link className="links__link" to="/shop">
              Shop
            </Link>
            {currentUser ? (
              <button className="links__link" onClick={() => SignOut()}>
                Sign Out
              </button>
            ) : (
              <Link className="links__link" to="/sign-in">
                Sign In
              </Link>
            )}
            <div
              className="cart-icon"
              onClick={() => dispatch(setOpenCart(!isCartOpen))}
            >
              <span>Cart ({itemsQuantity ? itemsQuantity : 0}) </span>
              🛒
            </div>
            {isCartOpen && <CartDropdown></CartDropdown>}
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navigation;
