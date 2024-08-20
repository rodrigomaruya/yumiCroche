import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { useStore } from '../store/store'
import { formatCurrency } from '../formatCurrency'

export default function Cart() {
  const { open,CartProduct } = useStore()
  const itemPrice=CartProduct.reduce((acc, item) => acc + item.price, 0)
  return (
    <div className={`Cart ${open ? 'Cart-active' : ''}`}>
      <div className='Cart-container'>
        {CartProduct.map((product,index) => (
          <CartItem key={index} data={product} />
        ))}
        
      </div>
      <div className='Cart-total'>
        <h2>{ formatCurrency(itemPrice, 'Brl')}</h2>
        <button className='Cart-button'>Finalizar Compra</button>
      </div>
    </div>
  )
}