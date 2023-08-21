import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";
// import { getUserDetails } from "../actions/user";

// export const useAuthStore = create(
//   devtools((set) => {
//     const loggedInCookie = Cookies.get("IITD");
//     const initialState = {
//       loggedIn: !!loggedInCookie,
//       userDetails: {},
//     };

//     return {
//       ...initialState,
//       logIn: (userDetails) => set({ loggedIn: true, userDetails }),
//       logOut: () => set({ loggedIn: false, userDetails: {} }),
//     };
//   }),
//   { name: "auth" }
// );

export const useAuthStore = create(
  devtools((set) => {
    const loggedInCookie = Cookies.get("IITD");
    const initialState = {
      loggedIn: !!loggedInCookie,
      userDetails: {},
    };

    return {
      ...initialState,
      logIn: (userDetails) => set({ loggedIn: true, userDetails }),
      logOut: () => set({ loggedIn: false, userDetails: {} }),
    };
  }),
  { name: "auth" }
);
