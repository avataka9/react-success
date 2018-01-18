import { constants } from '../constants';

const initialState = {
  isOpen: false
};

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_MENU_STATUS:
      return {...state, isOpen: action.payload};
    default:
      return state;
  }
};