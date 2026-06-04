import { UserData } from '@/typescript/interface/common.interface';
import { createStore } from 'zustand-x';

interface AuthStore {
  isLoggedIn: boolean;
  userData: UserData;
}

const initialState: AuthStore = {
  isLoggedIn: false,
  userData: null,
};

export const authStore = createStore<AuthStore>(initialState, {
  name: 'authStore',
  persist: true,
  mutative: true,
}).extendActions(api => ({
  setIsLoggedIn: (isLoggedIn: boolean) => {
    api.set('isLoggedIn', isLoggedIn);
  },
  setUserData: (userData: UserData) => {
    api.set('userData', userData);
  },
  reset: () => {
    api.set('isLoggedIn', false);
    api.set('userData', null);
  },
}));
