import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

export const empSlice = createSlice({
    name:'empSlice',
    initialState,
    reducers:{
        setFormData: (state,action) => {
            state.value += 1
        }
    }
})

export const { setFormData } = empSlice.actions

export default empSlice.reducer