import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  title: "404",
  isLoading: false,
};

const setTitle = (state, data) => {
  return updateObject(state, {
    title: data,
  });
};

const isLoading = (state, data) => {
  return updateObject(state, {
    isLoading: data,
  });
};

const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return setTitle(state, data);
    case actionTypes.SHOW_PROGRESSBAR:
      return isLoading(state, data);
    default:
      return state;
  }
};

export default reducer;
