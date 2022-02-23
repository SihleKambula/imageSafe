import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleEmailAndPasswordSignUp,
  handleSignOut,
  handleUserLogin,
} from "../../database/auth";

const user = JSON.parse(localStorage.getItem("user"));

// sign user up
export const userSignUp = createAsyncThunk(
  "auth/userSignUp",
  async (userData, thunkAPI) => {
    try {
      const { email, password } = userData;
      return await handleEmailAndPasswordSignUp(email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// log user in
export const logUserIn = createAsyncThunk(
  "auth/logUserIn",
  async (userData, thunkAPI) => {
    try {
      const { email, password } = userData;
      return await handleUserLogin(email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// sign user out
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await handleSignOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

const initState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    reset(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(userSignUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      })
      .addCase(logUserIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logUserIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(logUserIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
