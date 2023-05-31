import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { OrderType, ShopType } from "../shared/type/type";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/shops" }),
  endpoints: (build) => ({
    getShops: build.query<ShopType[], string>({
      query: () => "/create_shops",
    }),
    postOrder: build.mutation<OrderType, Partial<OrderType>>({
      query: (data) => ({
        url: `/create_order`,
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const { useGetShopsQuery, usePostOrderMutation } = shopApi;
