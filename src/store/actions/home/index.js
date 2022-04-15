import * as actionTypes from "../../../constants/actionTypes";
import * as api from "../api";

const setUsers = (data) => {
  return {
    type: actionTypes.SET_USERS,
    data: data,
  };
};

export const fetchUsers = (query) => async (dispatch) => {
  try {
    const data = await api.getUsers(query);
    dispatch(setUsers(data));
  } catch (err) {
    console.error(err);
  }
};
