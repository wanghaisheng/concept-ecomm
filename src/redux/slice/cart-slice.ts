import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface ProductState {
  productData: {
    name: string;
    image: string;
    id: string;
    count: number;
    price: string;
  }[];
}

const initialState: ProductState = {
  productData: [],
};

export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData.push(action.payload.productData);
    },
    clearProductData: (state, action) => {
      // Find the index of the product with the specified id
      const index = state.productData.findIndex((product) => {
        return product.id === action.payload.id;
      });

      // If the product is found, remove it using splice
      if (index !== -1) {
        state.productData.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductData, clearProductData } = cartSlice.actions;

export const selectAddProduct = (state: RootState) => state;

export default cartSlice.reducer;
