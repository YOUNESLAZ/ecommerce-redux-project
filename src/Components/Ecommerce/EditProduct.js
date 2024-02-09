import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../../JS/EcommerceAction';


const EditProduct = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const [newprice,setNewprice]=useState(0)
    const handleEdit=()=>{
        if(newprice>0){
            dispatch(editProduct(id,newprice))
            navigate("/Ecommerce")
        }
        else{
            alert("price should be positive")
        }
    }

  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>new price</Form.Label>
    <Form.Control  placeholder="Enter your name" onChange={(e)=>setNewprice(e.target.value)}  />
    </Form.Group>

  <Link to={"/Ecommerce"}><Button variant="primary" onClick={handleEdit} >
    Edit Product
  </Button></Link>
</Form>
      
    </div>
  )
}

export default EditProduct
