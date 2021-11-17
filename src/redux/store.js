import { configureStore } from "@reduxjs/toolkit";
import walletReducer from './features/options';

export const store = configureStore({
    reducer:{
       'wallet':walletReducer,
    }
});