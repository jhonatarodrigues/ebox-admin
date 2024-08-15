import { create } from "zustand";

export type AuthStore = {
  user: any;
  setUser: (user: any) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: get(),
  setUser: (user) => ({
    user,
  }),
  clearUser: () => ({
    user: null,
  }),
}));

export default useAuthStore;
