import Product from "../../types/Product";
import { apiInstance } from "..";

export const productsApi = apiInstance.injectEndpoints({
    endpoints: (builder) => ({
       /* The `getProducts` property is defining an endpoint for retrieving the list of products. */
        getProducts: builder.query<{limits: number, products: Product[]}, void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
        }),
        /* The `getProductDetails` property is defining an endpoint for retrieving the details of a
        specific product. It is using the `builder.query` method to create a query endpoint. */
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