import { ADD_PRODUCT, DELETE_PRODUCT, DISPONIBLE_PRODUCT, EDIT_PRODUCT } from "./ActionType";




const initialState={
    ProductList:[{id:Math.random(),name:"T-SHIRT",price:45,imgUrl:"https://celio.tn/media/catalog/product/cache/dd9d425ebb6d2ec92fb4ce41e2a39a01/t/-/t-shirt-col-rond-coton-stretch-bordeaux-1116453-1-product_1_5.jpg",dispo:true},
    {id:Math.random(),name:"SHOES",price:85,imgUrl:"https://mir-s3-cdn-cf.behance.net/projects/404/04f32d183495463.Y3JvcCw1MDgwLDM5NzMsMCw1NTM.jpg",dispo:false}]
}
const ProductReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_PRODUCT:
            return{...state,ProductList:[...state.ProductList,payload]}
        case EDIT_PRODUCT:
            return{...state,ProductList:state.ProductList.map(el=>el.id==payload.id?{...el,price:payload.price}:el)}
        case DELETE_PRODUCT:
            return{...state,ProductList:state.ProductList.filter(el=>el.id!=payload)}
        case DISPONIBLE_PRODUCT:
            return{...state,ProductList:state.ProductList.map(el=>el.id==payload?{...el,dispo:!el.dispo}:el)}
            
        default:
            return state

    }

}
export default ProductReducer;