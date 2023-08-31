import { apiSlice } from "./apiSlice";

export const actionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //user login
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: `POST`,
        body: data,
      }),
    }),

    // user register
    register: builder.mutation({
      query: (data) => ({
        url: `/register`,
        method: `POST`,
        body: data,
      }),
    }),

    // User logout
    logout: builder.mutation({
      query: () => ({
        url: `/`,
        method: `POST`,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  actionsApiSlice;
