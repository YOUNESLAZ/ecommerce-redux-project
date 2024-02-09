import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { DeleteMovie } from "../JS/Action";

function MovieCard({e}) {
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(DeleteMovie(id));
    }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e.posterUrl} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>{e.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{e.rate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ListGroup.Item>
          <Button variant="dark" href={e.trailer}>
            Watch Trailer
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={()=>handleDelete(e.id)} >
            Delete
          </Button>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
