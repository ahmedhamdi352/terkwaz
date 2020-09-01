
export const SET_CATEGORIES ='SET_CATEGORIES';
import {SERVER_URL} from '../../config/config'
import axios from 'axios'

export const setCategories = (categories) => {
  return dispatch => {
    dispatch({ type: SET_CATEGORIES, categories: categories,});
  };
};


export const fetchCategories = () => {
  return async dispatch => {
    const response = await axios.get(`${SERVER_URL}categories`);
    dispatch(
      setCategories(
        response.data ,
       
      )
    );
  };
};