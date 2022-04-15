import http from "../../services/NetworkService";

export const getUsers = (params) => {
  return http.get("api/", {
    params: params,
  });
};
