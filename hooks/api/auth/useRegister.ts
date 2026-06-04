import { registerUser } from '@/api/functions/auth.api';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
