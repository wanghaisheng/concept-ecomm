import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { ProductsResponse } from '../types/products';

const products = async (): Promise<ProductsResponse> => {
  const response = await axiosClient.get<ProductsResponse>(API_ENDPOINTS.PRODUCTS, {
    params: {},
  });
  return response.data;
};

export const useProductsQuery = (): UseQueryResult<ProductsResponse, Error> =>
  useQuery({
    queryFn: products,
    queryKey: [QUERY_KEYS.PRODUCTS],
  });
