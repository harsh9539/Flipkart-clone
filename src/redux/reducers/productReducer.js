
import { GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS } from "../constants/productsConstant"

//state = current state
// action = values after dispatch come in action

export const getProductsReducer = (state = {products:[]},action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {
                products:action.payload,
            }
        case GET_PRODUCTS_FAIL:
            return {
                error:action.payload,
            }
        default:
            return state;
    }
}