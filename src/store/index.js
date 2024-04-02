import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import products from '../data/products';
import { cartSlice } from './cartSlice';
export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,     // conencting product slice with store
        cart: cartSlice.reducer
    }
})
