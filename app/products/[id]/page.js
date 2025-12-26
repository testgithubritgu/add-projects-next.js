import { getFeaturedData } from '@/lib/products/product-select'
import React from 'react'
export const generateStaticParams =async () =>{
    const products = await getFeaturedData()
    return products.map(product =>({
        id:product.id.toString()
    }))
}
const Page =async ({params}) => {
    const {id} = await params
  
  return (
    <div>
      {id}
    </div>
  )
}

export default Page
