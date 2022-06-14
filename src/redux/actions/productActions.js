import axios from "axios";
import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} from "../constants/productsConstant";

const URL = 'http://localhost:8000';
export const getProducts = ()=> async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products`)
        // console.log(response);
        dispatch({type:GET_PRODUCTS_SUCCESS, payload:data})
    } catch (err) {
        dispatch({type:GET_PRODUCTS_FAIL, payload:err.message})
    }
}
