import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionType";




const initialState={Tasks:[{id:Math.random(),name:"Task1",isDone:false},{id:Math.random(),name:"Task2",isDone:false},
{id:Math.random(),name:"Task3",isDone:false}]};


export const TasklistReducer=(state=initialState,{type,Payload})=>{
switch (type) {
    case ADD_TASK:
        return {...state,Tasks:[...state.Tasks,{id:Math.random(),name:Payload,isDone:false}]}   

    case DONE_TASK:
        return {...state,Tasks:state.Tasks.map(el=>el.id==Payload?{...el,isDone:!el.isDone}:el)}

    case DELETE_TASK:
        return {...state,Tasks:state.Tasks.filter(el=>el.id!==Payload)}

    case EDIT_TASK:
        return{...state,Tasks:state.Tasks.map(el=>el.id==Payload.id?{...el,name:Payload.newTask}:el)}    

    default: return state

       
}

}