import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionType"


export const AddTask=(newTask)=>{

return{
      type: ADD_TASK,
      Payload: newTask

}

};

export const DoneTask =(id)=>{
return {
    type: DONE_TASK,
    Payload: id

}

}
export const EditTask =(id,newTask)=>{
return {
    type: EDIT_TASK,
    Payload: {id,newTask}

}
}

export const DeleteTask =(id)=>{
return {
    type: DELETE_TASK,
    Payload: id

}
}
