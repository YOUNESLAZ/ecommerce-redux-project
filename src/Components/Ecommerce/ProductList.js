import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProductList = () => {
    const ProductList=useSelector(state=>state.ProductReducer.ProductList);
    console.log(ProductList)  
  return (
    
    <div>
      <Link to={"/AddProduct"} ><Button>add product</Button></Link>
        {ProductList.map(el=><ProductCard el={el} />)} 
    </div>
  )
}


export default ProductList;
