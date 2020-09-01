
export const SET_ITEMS ='SET_ITEMS';
export const SET_ACTIVE_ITEM='SET_ACTIVE_ITEM';
import {SERVER_URL} from '../../config/config'
import axios from 'axios'

export const setItems = (items) => {
  return dispatch => {
    dispatch({ type: SET_ITEMS, items: items,});
  };
};


export const fetchItems = (itemName) => {
  return async dispatch => {
      console.log(`${SERVER_URL}entries?category=${itemName}`)
      const response = await axios.get(`${SERVER_URL}entries?category=${itemName}`);
          dispatch(
              setItems(
              response.data.entries ,
             
            )
          );
  };
};

export const setActiveItem = (activeItem) => {
    return dispatch => {
      dispatch({ type: SET_ACTIVE_ITEM, activeItem: activeItem,});
    };
  };