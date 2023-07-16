import axios from "axios";

export default () => {
  const axiosInstance = axios.create({
    baseURL: `http://65.1.32.212/`,
  });

  // const token = localStorage.getItem("token");
  // if (token) {
  //   axiosInstance.defaults.headers.common.Authorization = `Token ${token}`;
  // }

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
        location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
