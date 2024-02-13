import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { DoneTask } from '../../JS/TaskListAction';

function TaskCard({el}) {
const Dispatch=useDispatch()
const handelDone=()=>{
    Dispatch(DoneTask(el.id))
}


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Button variant="primary" onClick={handelDone()}>{el.isDone?"Done":"UnDone"}</Button>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;