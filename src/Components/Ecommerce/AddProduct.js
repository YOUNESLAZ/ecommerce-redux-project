import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../JS/EcommerceAction';
import { Link, useNavigate } from 'react-router-dom';

function ADDProduct() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const [name,setName]=useState("") 
    const [price,setPrice]=useState(0) 
    const [imgUrl,setImgUrl]=useState("")
    const handleClick=()=>{
        dispatch(addProduct({id:Math.random(),name:name,price:price,imgUrl:imgUrl,dispo:true}))
        
    
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>product name</Form.Label>
        <Form.Control  placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}  />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>product price</Form.Label>
       <Form.Control  placeholder="Enter product price" onChange={(e)=>setPrice(e.target.value)} />
  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product image</Form.Label>
        <Form.Control  placeholder="enter your product image" onChange={(e)=>setImgUrl(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Link to={"/Ecommerce"}><Button variant="primary" onClick={handleClick} >
        ADD
      </Button></Link>
    </Form>
  );
}

export default ADDProduct;