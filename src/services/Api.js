import axios from "axios";

export default () => {
  const axiosInstance = axios.create({
    baseURL: `https://ec2-65-1-32-212.ap-south-1.compute.amazonaws.com/`,
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
