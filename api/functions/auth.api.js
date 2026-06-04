import axiosInstanse from '../axiosInstance';
import { endpoints } from '../endpoints';

export const registerUser = async payload => {
  const response = await axiosInstanse.post(endpoints.auth.register, payload);
  return response.data;
};

export const loginUser = async payload => {
  const response = await axiosInstanse.post(endpoints.auth.login, payload);
  return response.data;
};
