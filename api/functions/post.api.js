import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';

export const createPost = async data => {
  try {
    const response = await axiosInstanse.post(endpoints.userPost.createPost, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserPosts = async () => {
  try {
    const response = await axiosInstanse.get(endpoints.userPost.getAllPosts);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editMyPost = async ({ id, content }) => {
  try {
    const response = await axiosInstanse.patch(`${endpoints.userPost.editPost}/${id}`, { content });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const toggleLike = async postId => {
  try {
    const response = await axiosInstanse.post(`${endpoints.userPost.likePost}/${postId}/like`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
