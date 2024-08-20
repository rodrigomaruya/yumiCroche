import './CartItem.css'
import { IoTrashBinSharp } from "react-icons/io5";
import { formatCurrency } from "../formatCurrency";
import { useStore } from '../store/store';
interface Product {
  data:{
    id: number
    src: string
    title: string
    price: number
  }
}

export default function CartItem({data}:Product) {
  const {setCartProduct,CartProduct}=useStore()
  const handleRemove = (id: number) => {
    setCartProduct(CartProduct.filter(item => item.id !== id))
  }

  return (
    <div className="CartItem">
      <img
        src={data.src}
        alt="Product"
        className="CartItem-img"
      />
      <div className="CartItem-info">
        <h3 className="CartItem-title">{data.title}</h3>
        <p className="CartItem-price">{formatCurrency(data.price, 'Brl')}</p>
        <button className='CartItem-button'onClick={()=>handleRemove(data.id)}>
          <IoTrashBinSharp />

        </button>
      </div>
    </div>
  )
}
