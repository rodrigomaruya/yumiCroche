import './Header.css'
import { IoCart } from "react-icons/io5";
import {useStore } from '../store/store';

export default function Header() {

  const {  open, setOpen, CartProduct } = useStore() 
  
  return (
    <header className="App-header">
      <div className="App-logo">
        <h1>Yumi-Crochês</h1>

        <button className="App-cart" onClick={()=>setOpen(!open)}>
          {CartProduct.length==0?'':<span className='App-cart-number'>{CartProduct.length}</span>}
          
          <IoCart />
        </button>
      </div>
    </header>
  )
}