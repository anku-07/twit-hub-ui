import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';

export const createPost = async data => {
  try {
    const response = await axiosInstanse.post(endpoints.userPost.createPost, data);
    console.log('post data from api', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserPosts = async () => {
  try {
    const response = await axiosInstanse.get(endpoints.userPost.getAllPosts);
    console.log('post data from api', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editMyPost = async ({ id, content }) => {
  try {
    const response = await axiosInstanse.patch(`${endpoints.userPost.editPost}/${id}`, { content });
    console.log('edit post data from api', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
