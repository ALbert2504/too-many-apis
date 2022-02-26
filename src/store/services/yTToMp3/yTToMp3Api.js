import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const yTToMp3ApiHeaders = {
  'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
  'x-rapidapi-key': '27433ebcc7msh9012c9d80464867p1d8536jsn8a127fe154bf',
};

const baseUrl = 'https://youtube-mp36.p.rapidapi.com/dl';

const createRequest = (url) => ({url, headers: yTToMp3ApiHeaders});

export const yTToMp3Api = createApi({
  reducerPath: 'yTToMp3Api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getMp3: builder.query({
      query: (id) => createRequest(`?id=${id}`),
    }),
  }),
});

export const { useGetMp3Query } = yTToMp3Api;