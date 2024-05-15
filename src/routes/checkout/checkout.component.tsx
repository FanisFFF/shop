import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Tstate, clearCart } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state: Tstate) => state.cartItems);
  const total = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clearCart());
    navigate("/");
  }
  return (
    <div>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((el) => <CheckoutItem key={el.id} product={el} />)
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <div>
        <p>Total: {total}$</p>
        <button onClick={() => handleClick()}>Buy</button>
      </div>
    </div>
  );
}
export default Checkout;
