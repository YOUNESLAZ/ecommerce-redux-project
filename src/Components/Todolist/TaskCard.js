import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { DeleteTask, DoneTask } from '../../JS/TaskListAction';
import { Link } from 'react-router-dom';

function TaskCard({el}) {
const Dispatch=useDispatch()
const handelDone=()=>{
    Dispatch(DoneTask(el.id))
}
const handleDelete=()=>{
  Dispatch(DeleteTask(el.id))
}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Button variant="primary" onClick={handelDone} style={el.isDone?{backgroundColor:"green"}:{backgroundColor:"red"}}>{el.isDone?"Done":"UnDone"}</Button>
       <Link to={`/EditTask/${el.id}`}><Button variant="primary">Edit</Button></Link> 
        <Button variant="primary" onClick={handleDelete} >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;