import * as actionTypes from "../../../constants/actionTypes";

export const setTitle = (data) => {
  return {
    type: actionTypes.SET_TITLE,
    data: data,
  };
};

export const showProgressBar = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_PROGRESSBAR,
      data,
    });
  };
};
