import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootUsers, User } from "../models/users.model";
import { getUsertList } from '../api/api';

export interface userState {
  value:User[]
}


const initialState: userState = {
  value:[] 
}

export const usersSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsers } = usersSlice.actions

export default usersSlice.reducer