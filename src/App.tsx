import "./App.css";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Header />
      <Products />
      <Cart />
      <ToastContainer />
    </>
  );
}

export default App;
