import Product from "../types/Product";
import { apiInstance } from ".";

export const productsApi = apiInstance.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<{limits: number, products: Product[]}, void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
        }),
        getProductDetails: builder.query<Product, number>({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
  })

  //Export hooks for usage in function components
  export const { useGetProductDetailsQuery , useGetProductsQuery} = productsApi