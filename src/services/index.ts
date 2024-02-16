import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dummyjson.com';

export const apiInstance = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({}),
  })

//Export reducer for use in store
 export const { reducer: apiReducer } = apiInstance;