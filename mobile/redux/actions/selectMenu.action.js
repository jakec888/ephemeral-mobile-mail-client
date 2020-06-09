export const SELECT_MENU = 'SELECT_MENU';

export const selectMenu = menuItem => {
  return dispatch => {
    dispatch({
      type: SELECT_MENU,
      payload: menuItem,
    });
  };
};
