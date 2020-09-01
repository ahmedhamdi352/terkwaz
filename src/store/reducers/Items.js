import { SET_ITEMS, SET_ACTIVE_ITEM,SET_HELPER_ITEMS } from '../actions/Items';

const initialState = {
    entries:[],
    helperEntries:[],
    activeItem :{}
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        entries: action.items,
        helperEntries:action.items
      };

      case SET_HELPER_ITEMS:
      return {
        ...state,
        entries: action.items,
        helperEntries:action.items
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
