import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

import * as types from '../constants/ActionTypes';
import {
    BASE_URL,
    USER_SIGNUP,
    USER_LOGIN,
} from '../constants/URLS';
import store from "../store";


export const createUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/${USER_SIGNUP}`, data);
        console.log('response', response)
        if (response.statusCode === 201) {
            toast.success("User registered sucessfully!");
            return true;
        }
        else {
            toast.error('Something went wrong');
            return false;
        }
    }
    catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

        toast.error(error.response);
        return false;
    }
}

export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/${USER_LOGIN}`, data);
        console.log('response', response)
        if (response.statusCode === 200) {
            toast.success("User registered sucessfully!");
            return true;
        }
        else {
            toast.error('Something went wrong');
            return false;
        }
    }
    catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

        toast.error(error.response);
        return false;
    }
}
