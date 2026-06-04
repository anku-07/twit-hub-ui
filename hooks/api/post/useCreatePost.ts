import { createPost } from '@/api/functions/post.api';
import { useMutation } from '@tanstack/react-query';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
  });
};
