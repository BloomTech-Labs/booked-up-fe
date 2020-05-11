import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: {
      Authorization: token
    }
  });
};
