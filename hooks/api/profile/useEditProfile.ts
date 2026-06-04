import { editProfile } from '@/api/functions/profile.api';
import { useMutation } from '@tanstack/react-query';

export const useEditProfile = () => {
  return useMutation({
    mutationFn: editProfile,
  });
};
