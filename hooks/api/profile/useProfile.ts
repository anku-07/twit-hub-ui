import { myProfile } from '@/api/functions/profile.api';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: myProfile,
  });
};
