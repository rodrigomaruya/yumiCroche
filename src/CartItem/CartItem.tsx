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
    quantity: number
  }
}

export default function CartItem({data}:Product) {

  
  const {setCartProduct,CartProduct,setOpen}=useStore()

  const handleRemove = (title:string) => {
    const index:number= CartProduct.findIndex(item => item.title === title)
    if( index !== -1 ){
      const item = CartProduct[index]
      if(item.quantity > 1){
        item.quantity -= 1
        setCartProduct([...CartProduct])
        return
      }
      CartProduct.splice(index, 1)
      setCartProduct([...CartProduct])
      setOpen(false)
    }

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
        <p className="CartItem-quantity">Quantity: {data.quantity}</p>
        <p className="CartItem-price">{formatCurrency(data.price, 'Brl')}</p>
        <button className='CartItem-button'onClick={()=>handleRemove(data.title)}>
          <IoTrashBinSharp />

        </button>
      </div>
    </div>
  )
}
