import { useEffect } from 'react'
import CardProduct from '../CardProduct/CardProduct'
import './Products.css'
import {product} from '../Array'
import { useStore } from '../store/store'
export default function Products() {
  const { Products, getAllProducts } = useStore()
  
  useEffect(()=>{
    getAllProducts(product)

  },[getAllProducts])

  return (
    <div className="Products">

      {Products.map(product => (
        <CardProduct
          key={product.id}
          data={product}
        />
      ))}
    </div>
  )
}