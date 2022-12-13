import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//import { RootUsers, User } from "../models/users.model";
//import { getUsertList } from '../api/api';

export interface bankState {
  value:any
}


const initialState: bankState = {
  value:[] 
}

export const bankListSlice = createSlice({
  name: 'bankList',
  initialState,
  reducers: {
    addBankList: (state, action: PayloadAction<any>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBankList } = bankListSlice.actions

export default bankListSlice.reducer