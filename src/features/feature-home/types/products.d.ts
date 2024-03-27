export interface ProductDataType {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface ProductsResponse {
  data: ProductDataType[];
}
