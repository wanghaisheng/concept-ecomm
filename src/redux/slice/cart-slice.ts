import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface ProductState {
  productData: {
    name: string;
    image: string;
    id: string;
    count: number;
    price: number;
    originalPrice: number;
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
      const index = state.productData.findIndex((product) => {
        return product.id === action.payload.productData.id;
      });
      if (index === -1) {
        state.productData.push(action.payload.productData);
      } else {
        state.productData[index].count += 1;
        state.productData[index].price += state.productData[index].originalPrice;
      }
    },
    clearProductData: (state, action) => {
      const index = state.productData.findIndex((product) => {
        return product.id === action.payload.id;
      });

      if (index !== -1) {
        state.productData.splice(index, 1);
      }
    },
    addSameItem: (state, action) => {
      const productId = action.payload.id;
      const productIndex = state.productData.findIndex((product) => product.id === productId);
      state.productData[productIndex].count += 1;
      state.productData[productIndex].price += state.productData[productIndex].originalPrice;
    },
    deleteSameItem: (state, action) => {
      const productId = action.payload.id;
      const productIndex = state.productData.findIndex((product) => product.id === productId);
      if (state.productData[productIndex].count === 1) {
        state.productData.splice(productIndex, 1);
      } else {
        state.productData[productIndex].count -= 1;
        state.productData[productIndex].price -= state.productData[productIndex].originalPrice;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductData, clearProductData, addSameItem, deleteSameItem } = cartSlice.actions;

export const selectAddProduct = (state: RootState) => state;

export default cartSlice.reducer;
