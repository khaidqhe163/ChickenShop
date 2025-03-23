import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
    value: string
}

const initialState: CategoryState = {
    value: 'All',
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryValue } = categorySlice.actions

export default categorySlice.reducer