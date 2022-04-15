import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  users: false,
};

const setUsers = (state, data) => {
  return updateObject(state, {
    users: data,
  });
};

const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.SET_USERS:
      return setUsers(state, data);
    default:
      return state;
  }
};

export default reducer;
