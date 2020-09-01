
export const SET_ACTIVE_ITEM='SET_ACTIVE_ITEM';

export const setActiveItem = (activeItem) => {
    return dispatch => {
      dispatch({ type: SET_ACTIVE_ITEM, activeItem: activeItem,});
    };
  };