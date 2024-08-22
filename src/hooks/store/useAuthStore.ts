import { UserModel } from "@/model/user";
import { create } from "zustand";

export type AuthStore = {
  user: UserModel | null;
  setUser: (user: any) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
  clearUser: () => ({
    user: null,
  }),
}));

export default useAuthStore;
