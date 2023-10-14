import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = () => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <h1></h1>
    </div>
  )
}

export default ShopCategory
