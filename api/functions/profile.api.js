import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';

export const myProfile = async () => {
  const response = await axiosInstanse.get(endpoints.profile.userProfile);

  console.log('profile data from api', response);
  return response.data;
};

export const editProfile = async data => {
  const response = await axiosInstanse.patch(endpoints.profile.editProfile, data);
  console.log('edit profile data from api', response);
  return response.data;
};
