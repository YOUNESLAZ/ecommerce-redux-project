import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddTask } from '../../JS/TaskListAction';


function AddTaske() {
    const [name,setName]=useState("")
    const navigate=useNavigate()
    const Dispatch=useDispatch()
    const handleAdd=()=>{
        Dispatch(AddTask(name))
        navigate("/TaskList")
    }
  return (
    <>
        <h1>Ajouter une tache</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" >
          Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e)=>{setName(e.target.value)}}
        />
      </InputGroup>
      <Button onClick={handleAdd}>ADD it</Button>
    </>
  );
}

export default AddTaske;