import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bite-hub-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
