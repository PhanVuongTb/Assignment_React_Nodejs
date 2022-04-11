import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice"
import productsReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice"

const store = configureStore({
    reducer: {
        categorys: categoryReducer,
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
// function getInt(a: string) {
//   return parseInt(a);
// }

// type A = ReturnType<typeof getInt>; // => number