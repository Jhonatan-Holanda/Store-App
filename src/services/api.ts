import axios from "axios";
import { AppError } from "../utils/AppError";

const api = axios.create({
  baseURL:'https://fakestoreapi.com'
})

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if(error.response && error.response.data){
    return Promise.reject(new AppError(error.response.data))
  }else {
    return Promise.reject(new AppError('Error no servidor. Tente novamente mais tarde'));
  }
})

export { api };