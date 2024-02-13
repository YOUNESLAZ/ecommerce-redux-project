import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TaskList = () => {

const Tasks=useSelector(state=>state.TasklistReducer.Tasks)

return (


    <div>
     <Link to={"/AddTask"}><Button>ADD</Button></Link>
{Tasks.map(el=><TaskCard el={el}/>)}

    </div>
  )
}

export default TaskList