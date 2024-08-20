import { create } from "zustand";


type Product = {
  id: number
  src: string
  title: string
  price: number
}
 type Products ={
   Products:Product[]
   addProduct: (product:Product) => void
   getAllProducts: (product:Product[]) => void
   open: boolean
   setOpen: (open:boolean) => void
   CartProduct:Product[],
   setCartProduct: (all:Product[]) => void
 } 


export const useStore = create<Products>((set) => ({
  Products:[],
  addProduct: (product) => set((state) => ({ Products: [...state.Products, product] })),
  getAllProducts: (product) => set((state) => ({ ...state, Products: product })),
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
  CartProduct:[],
  setCartProduct: (all)=>set((state)=>({...state, CartProduct:all})),
  
}));