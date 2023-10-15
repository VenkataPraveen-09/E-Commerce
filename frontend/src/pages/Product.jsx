import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const { productId } = useParams();

  // Find the product with a matching id
  const product = all_product.find((e)=>e.id===Number(productId));

  return (
    <div>
      {/* {/* {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${product.new_price}</p>
          <p>Old Price: ${product.old_price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>Product not found</p> 
      )} */}
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  );
}

export default Product;
 