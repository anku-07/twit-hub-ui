import { getAllUserPosts } from '@/api/functions/post.api';
import { useQuery } from '@tanstack/react-query';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getAllUserPosts,
  });
};
