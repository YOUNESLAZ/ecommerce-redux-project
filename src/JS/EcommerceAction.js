import { ADD_PRODUCT, DELETE_PRODUCT, DISPONIBLE_PRODUCT, EDIT_PRODUCT } from "./ActionType"



export const addProduct=(newProduct)=>{
    return{ 
        type:ADD_PRODUCT,
        payload:newProduct,
    }
}

export const editProduct=(id,price)=>{
    return{
        type:EDIT_PRODUCT,
        payload:{id,price},
    }
}

export const deleteProduct=(id)=>{
    return{
        type: DELETE_PRODUCT,
        payload:id
    }
}
export const DisponibleProduct=(id)=>{
    return{
        type:DISPONIBLE_PRODUCT,
        payload:id,
    }
}
