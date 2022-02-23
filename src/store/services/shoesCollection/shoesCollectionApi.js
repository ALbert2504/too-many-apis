import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const shoesCollectionApiHeaders = {
  'x-rapidapi-host': 'shoes-collections.p.rapidapi.com',
  'x-rapidapi-key': '27433ebcc7msh9012c9d80464867p1d8536jsn8a127fe154bf'
};

const baseUrl = 'https://shoes-collections.p.rapidapi.com';

const createRequest = (url) => ({url, headers: shoesCollectionApiHeaders});

export const shoesCollectionApi = createApi({
  reducerPath: 'shoesCollectionApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getShoes: builder.query({
      query: () => createRequest('/shoes'),
    }),
    getShoe: builder.query({
      query: (shoeId) => createRequest(`/shoes/${shoeId}`),
    }),
  }),
});

export const { useGetShoesQuery, useGetShoeQuery } = shoesCollectionApi;