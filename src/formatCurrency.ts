export const formatCurrency=(price:number,currency:string)=>{

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency
  });
  return formatter.format(price);
  
}

