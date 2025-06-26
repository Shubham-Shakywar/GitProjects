import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/userSlice";
import AdminSlice from "./slices/AdminSlice";




export const store=configureStore({
    reducer:{
        userReducer:UserSlice.reducer,
        adminReducer:AdminSlice.reducer
    }
});



