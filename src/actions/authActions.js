import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

import * as types from '../constants/ActionTypes';
import * as URLS from '../constants/URLS';
import store from "../store";


export const createUser = (data) => {
    try{
        console.log('data', data); 
    }
    catch(error){
        console.log('error', error);
    }
}
