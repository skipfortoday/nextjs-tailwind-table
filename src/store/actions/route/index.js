import * as actionTypes from "../../../constants/actionTypes";

export const setTitle = (data) => {
  return {
    type: actionTypes.SET_TITLE,
    data: data,
  };
};
