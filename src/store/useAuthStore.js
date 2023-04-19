import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export const useAuthStore = create(devtools((set) => ({
  loggedIn: false,
  userDetails: {},
  logIn: (userDetails) => set({ loggedIn: true, userDetails }),
  logOut: () => set({ loggedIn: false, userDetails: {} }),
}), { name: "auth" }))
