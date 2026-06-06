import { toggleLike } from '@/api/functions/post.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
};
