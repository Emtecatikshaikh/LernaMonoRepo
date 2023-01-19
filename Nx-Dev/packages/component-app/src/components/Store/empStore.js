import { configureStore } from "@reduxjs/toolkit";
import empSliceReducer from '../Slice/empSlice'

export const empStore = configureStore({
    reducer: {
        empSlice: empSliceReducer,
    },
})