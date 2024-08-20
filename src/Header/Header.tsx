import "./Header.css";
import { IoCart } from "react-icons/io5";
import { useStore } from "../store/store";

export default function Header() {
  const { open, setOpen, CartProduct } = useStore();
  const itemCard = CartProduct.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="App-header">
      <div className="App-logo">
        <h1>Yumi-Crochês</h1>

        <button className="App-cart" onClick={() => setOpen(!open)}>
          {itemCard == 0 ? (
            ""
          ) : (
            <span className="App-cart-number">{itemCard}</span>
          )}

          <IoCart />
        </button>
      </div>
    </header>
  );
}
