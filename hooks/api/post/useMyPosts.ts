import { myPosts } from '@/api/functions/myPosts.api';
import { useQuery } from '@tanstack/react-query';

export const useMyPosts = () => {
  return useQuery({
    queryKey: ['my-posts'],
    queryFn: myPosts,
  });
};
