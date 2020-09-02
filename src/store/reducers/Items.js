import {  SET_ACTIVE_ITEM, } from '../actions/Items';

const initialState = {
     activeItem :{}
   
};

export default (state = initialState, action) => {
  switch (action.type) {
    
      case SET_ACTIVE_ITEM:
        return {
          ...state,
          activeItem: action.activeItem,
        };
      
    default:
      return state;
  }
};
