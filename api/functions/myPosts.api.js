import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';

export const myPosts = async () => {
  try {
    const response = await axiosInstanse.get(endpoints.userPost.myPosts);
    console.log(response.data, 'My Posts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
