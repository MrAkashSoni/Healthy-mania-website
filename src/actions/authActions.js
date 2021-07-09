import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as types from '../constants/ActionTypes';
import {
    BASE_URL,
    USER_SIGNUP,
    USER_LOGIN,
} from '../constants/URLS';

export const isLoading = (loader = false) => {
    console.log('isLoading', loader)
    return {
        type: types.USER_LOADING,
        payload: loader,
    };
};

export const createUser = (data) => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const response = await axios.post(`${BASE_URL}/${USER_SIGNUP}`, data);
        if (response.status === 201) {
            toast.success("User registered sucessfully!");
            dispatch(isLoading(false));
            return true;
        }
        else {
            toast.error('Something went wrong');
            dispatch(isLoading(false));
            return false;
        }
    }
    catch (error) {
        toast.error(error.response.data);
        dispatch(isLoading(false));
        return false;
    }
}

export const loginUser = (data) => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        console.log('dispatch-->', dispatch)
        const response = await axios.post(`${BASE_URL}/${USER_LOGIN}`, data);
        console.log('response', response)
        if (response.status === 200) {
            toast.success("User logged in sucessfully!");
            dispatch({
                type: types.USER_DETAIL,
                payload: response.data
            })
            dispatch(isLoading(false));
            return true;
        }
        else {
            toast.error('Something went wrong');
            dispatch(isLoading(false));
            return false;
        }
    }
    catch (error) {
        toast.error(error.response);
        dispatch(isLoading(false));
        return false;
    }
}
