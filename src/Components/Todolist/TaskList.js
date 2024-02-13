import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskList = () => {

const Tasks=useSelector(state=>state.TasklistReducer.Tasks)

  return (


    <div>

{Tasks.map(el=><TaskCard el={el}/>)}

    </div>
  )
}

export default TaskList