import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BrandState {
    value: string
}

const initialState: BrandState = {
    value: 'All',
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        setBrandValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBrandValue } = brandSlice.actions

export default brandSlice.reducer