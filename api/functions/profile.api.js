import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';

export const myProfile = async () => {
  const response = await axiosInstanse.get(endpoints.profile.userProfile);
  return response.data;
};

export const editProfile = async data => {
  const response = await axiosInstanse.patch(endpoints.profile.editProfile, data);
  return response.data;
};
