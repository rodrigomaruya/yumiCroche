import './CardProduct.css'
import { FaCartPlus } from "react-icons/fa";
import { useStore } from '../store/store';
import { formatCurrency } from '../formatCurrency';
type Product = {
  data: {
    id: number
    src:string
    title: string
    price: number
    
  }
}

export default function CardProduct({data}: Product) {
  const { setCartProduct,CartProduct} = useStore()
  const handleAdd = () => {
    
    setCartProduct([...CartProduct,data])
   
    
  }

  return (
    <div className="CardProduct">
      <img 
        src={data.src} 
        alt="Image" 
        className='CardProduct-img'
      />
      <div className='CardProduct-info'>
        <h3 className='CardProduct-title'>{data.title}</h3>
        <h3 className='CardProduct-price'>{formatCurrency(data.price, 'Brl')	}</h3>
      </div>
      <button className='CardProduct-button' onClick={handleAdd}>
        <FaCartPlus />

      </button>
    </div>
  )
}