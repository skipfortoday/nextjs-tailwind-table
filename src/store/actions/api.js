import http from "../../services/NetworkService";

export const getPayMethod = (params) => {
  return http.get("/paymethod", {
    params: params,
  });
};
