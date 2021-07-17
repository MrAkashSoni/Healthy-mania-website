import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as types from '../constants/ActionTypes';
import {
    BASE_URL,
    GET_ALL_PRODUCTS,
} from '../constants/URLS';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});

export const receiveProducts = (products) => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsBegin());
        const response = await axios.get(`${BASE_URL}/${GET_ALL_PRODUCTS}`);
        console.log('response', response);
        if (response.status === 200) {
            dispatch(receiveProducts(response.data));
            return true;
        } else {
            toast.error('Something went wrong');
            return false;
        }
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
}

export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})