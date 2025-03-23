import { configureStore } from '@reduxjs/toolkit'
import brandReducer from '../features/BrandSlice'
import categoryReducer from '../features/categorySlice'

export const store = configureStore({
    reducer: {
        brand: brandReducer,
        category: categoryReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch