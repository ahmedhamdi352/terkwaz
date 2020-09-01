import { SET_ITEMS, SET_ACTIVE_ITEM } from '../actions/Items';

const initialState = {
    entries:[],
    activeItem :{}
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        entries: action.items,
      };

      case SET_ACTIVE_ITEM:
        return {
          ...state,
          activeItem: action.activeItem,
        };
      
    default:
      return state;
  }
};
