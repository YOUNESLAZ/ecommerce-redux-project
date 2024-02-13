import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditTask } from '../../JS/TaskListAction';


function EditTaske() {
    const {id}=useParams()
    const [name,setName]=useState("")
    const navigate=useNavigate()
    const Dispatch=useDispatch()
    const handleEdit=()=>{
      if(name.trim()!=""){
        Dispatch(EditTask(id,name))
        navigate("/TaskList")
      }
      else{
        alert("Modifier")
      }
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
      <Button onClick={handleEdit}>ADD it</Button>
    </>
  );
}

export default EditTaske;