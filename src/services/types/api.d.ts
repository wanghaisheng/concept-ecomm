export interface ApiResponse<T> {
  data: T;
  error: boolean;
  message: string;
  meta_data: MetaData;
  validation_errors: {
    [key: string]: string;
  };
}
