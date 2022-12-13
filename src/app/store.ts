import { configureStore } from '@reduxjs/toolkit'
import bankListReducer from '../features/bankListSlice'
import linksReducer from '../features/linksSlice'
import myBanksReducer from '../features/myBanksSlice'


export const store = configureStore({
  reducer: {
    banks:bankListReducer,
    links:linksReducer,
    myBanks:myBanksReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch