import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { useStore } from "../store/store";
import { formatCurrency } from "../formatCurrency";

export default function Cart() {
  const { open, CartProduct } = useStore();
  function total() {
    const itemPrice = CartProduct.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return formatCurrency(itemPrice, "Brl");
  }

  return (
    <div className={`Cart ${open ? "Cart-active" : ""}`}>
      <div className="Cart-container">
        {CartProduct.map((product, index) => (
          <CartItem key={index} data={product} />
        ))}
      </div>
      <div className="Cart-total">
        <h2>{total()}</h2>
        <button className="Cart-button">Finalizar Compra</button>
      </div>
    </div>
  );
}
