import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books', // Makes a GET request to `/books (Books)`
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`, // GET request to `/books/:id` (SingleBook)
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/users/register', // POST request to `/users/register`
        method: 'POST',
        body: userData, // Payload for the request
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/users/login', // POST request to `/users/login` (Login)
        method: 'POST',
        body: credentials, // Payload containing user credentials
      }),
    }),
    checkoutBook: builder.mutation({
      query: (bookId) => ({
        url: `/reservations`, // POST request to `/reservations` (For single book)
        method: 'POST',
        body: { bookId }, // Payload with the book ID to check out
      }),
    }),
    getReservations: builder.query({
      query: () => {
        return {
          url: '/reservations', // GET request to `/reservations`  (single books that are checked out)
          method: 'GET',
        };
      },
    }),
    updateBookAvailability: builder.mutation({
      query: ({ bookId, available }) => ({
        url: `/books/${bookId}`, // PATCH request to `/books/:bookId`
        method: 'PATCH',
        body: { available }, // Payload with availability status
      }),
    }),
    returnBook: builder.mutation({
      query: (reservationId) => ({
        url: `/reservations/${reservationId}`, // DELETE request to `/reservations/:reservationId` (to return single book)
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useCheckoutBookMutation,
  useReturnBookMutation,
  useUpdateBookAvailabilityMutation,
  useGetReservationsQuery,
} = apiSlice;
export default apiSlice.reducer;
