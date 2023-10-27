import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreator";

interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: string;
  }
  
  const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: ''
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = '';
          state.users = action.payload;
        })
        .addCase(fetchUsers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.isLoading = false;
          if (action.payload) {
            state.error = action.payload as string;
          } else {
            state.error = action.error.message as string;
          }
        });
    }
  });
  
export default userSlice.reducer;
