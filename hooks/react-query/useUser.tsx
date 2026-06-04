import { GetProfileDetails } from '@/api/functions/user.api';
import { UserData } from '@/typescript/interface/common.interface';
import { authStore } from '@/zustand/auth.zustand';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const useUser = () => {
  const token: string = Cookies.get(process.env.NEXT_APP_TOKEN_NAME!) || '';

  const profileDetails = useQuery({
    queryKey: ['userdetails', token],
    queryFn: GetProfileDetails,
    //  enabled: !!token && userData === null,
    enabled: false,
  });

  useEffect(() => {
    if (profileDetails?.data) {
      if (profileDetails?.data?.status === 401) {
        authStore.actions.setIsLoggedIn(false);
        authStore.actions.setUserData(null);
      } else {
        authStore.actions.setIsLoggedIn(true);
        authStore.actions.setUserData(profileDetails?.data?.data?.data as unknown as UserData);
      }
    }
  }, [profileDetails?.status, profileDetails?.data]);

  return { ...profileDetails };
};

export default useUser;
