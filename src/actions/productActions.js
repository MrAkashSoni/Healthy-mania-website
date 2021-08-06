import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as types from '../constants/ActionTypes';
import {
    BASE_URL,
    GET_ALL_PRODUCTS,
    GET_ALL_CATEGORY,
    GET_PRODUCT,
} from '../constants/URLS';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});

export const receiveProducts = (products) => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})

export const categories = (categories) => ({
    type: types.RECEIVE_CATEGORY,
    categories
})

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsBegin());
        const response = await axios.get(`${BASE_URL}/${GET_ALL_PRODUCTS}`);
        if (response.status === 200) {
            dispatch(receiveProducts(response.data));
            return true;
        } else {
            toast.error('Something went wrong');
            return false;
        }
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.message)
            toast.error(error.response.data.message);
        return false;
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        console.log('getProduct id', id)
        const response = await axios.get(`${BASE_URL}/${GET_PRODUCT}/${id}`);
        console.log('getProduct id', response)
        if (response.status === 200) {
            return response.data;
        } else {
            toast.error('Something went wrong');
            return false;
        }
    } catch (error) {
        console.log('getProduct id', error)
        if (error && error.response && error.response.data && error.response.data.message)
            toast.error(error.response.data.message);
        return false;
    }
}

export const getAllCategory = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/${GET_ALL_CATEGORY}`);
        console.log('getallcategoty response', response);
        if (response.status === 200) {
            dispatch(categories(response.data));
            return true;
        }
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.message)
            toast.error(error.response.data.message);
        return false;
    }
}