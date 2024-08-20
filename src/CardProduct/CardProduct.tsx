import './CardProduct.css'
import { FaCartPlus } from "react-icons/fa";
import { useStore } from '../store/store';
import { formatCurrency } from '../formatCurrency';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Product = {
  data: {
    id: number
    src:string
    title: string
    price: number
    quantity: number
    
  }
}

export default function CardProduct({data}: Product) {
  const { setCartProduct,CartProduct} = useStore()

  const notify = () => toast.success('Item adicionado ao carrinho!',{
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
  const handleAdd = () => {
    const existingProduct = CartProduct.find(item => item.id === data.id);
    if (existingProduct) {
      existingProduct.quantity++;
      setCartProduct([...CartProduct]);
      notify();
      return;
    }else{
      
      setCartProduct([...CartProduct,data])
      notify();
    }
   
    
    
  }
  
  return (
    <div className="CardProduct" >
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