/*export const HeaderHamburgerActions = (isOpen) => {
  if (isOpen) {
    alert("click-close");
    return {
      type: 'CLOSE_MENU'
    }
  } else {
    alert("click-open");
    return {
      type: 'OPEN_MENU'
    }
  }
};*/

export const HeaderHamburgerActions = {
  onClick(isOpen) {
    // alert("click");
    return {
      type: "TOGGLE_MENU_STATUS",
      payload: !isOpen
    }
  }
};

export const onClick = (isOpen) => {
  alert("click, isOpen:" + isOpen);
  return {
    type: "TOGGLE_MENU_STATUS",
    payload: !isOpen
  }
};