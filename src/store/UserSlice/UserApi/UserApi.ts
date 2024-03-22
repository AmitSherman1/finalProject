import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'store/globalStore';

// Define the API service
export const UserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['userApi'],
  endpoints: builder => ({
    getUser: builder.query({
      query: (userId: string) => `user/${userId}`,
    }),
    getProfile: builder.query({
      query: (userId: string) => `user/${userId}`,
    }),
    getMostVotedPosts: builder.query({
      query: (userId: string) => `user/mostVotedPosts/${userId}`,
    }),
  }),
});

// Export the auto-generated hooks
export const {useGetUserQuery, useGetProfileQuery, useGetMostVotedPostsQuery} =
  UserApi;

// Export the generated reducer for integration into your store
export const UserReducer = UserApi.reducer;

export const UserMiddleware = UserApi.middleware;
