import axios from 'axios';

import { AppError } from '../../models';

const httpClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data));
    }

    return Promise.reject(
      new AppError('Error no servidor. Tente novamente mais tarde')
    );
  }
);

export { httpClient };
