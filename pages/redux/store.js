import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import orderReducer from "./orderSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    orders: orderReducer,
    users: userReducer,
  },
});

export default store;
