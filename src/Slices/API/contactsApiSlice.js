import { apiSlice } from "./apiSlice";

export const contactsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get contacts
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: `GET`,
      }),
      providesTags: ["contact"],
    }),

    // create contacts
    createContact: builder.mutation({
      query: (data) => ({
        url: `/contacts`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    // update contacts
    updateContact: builder.mutation({
      query: (data) => ({
        url: `/contacts`,
        method: `PATCH`,
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
} = contactsApiSlice;
