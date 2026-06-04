import { editMyPost } from '@/api/functions/post.api';
import { useMutation } from '@tanstack/react-query';

export const useEditMyPost = () => {
  return useMutation({
    mutationFn: editMyPost,
  });
};
