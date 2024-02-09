import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DISPONIBLE_PRODUCT } from '../../JS/ActionType';
import { DisponibleProduct, deleteProduct, editProduct } from '../../JS/EcommerceAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductCard({el}) {
  const dispatch=useDispatch();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imgUrl}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
           {el.price}
         </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(DisponibleProduct(el.id))} style={el.dispo==false?{backgroundColor:"red"}:{backgroundColor:"green"}} >{el.dispo==true?"disponible":"non disponible"}</Button>
        <Link to={`/EditProduct/${el.id}`}><Button> edit product</Button></Link> 
        <Button variant="primary" onClick={()=>dispatch(deleteProduct(el.id))} > delete </Button>
      </Card.Body>
    </Card>
  );
}
export default ProductCard;