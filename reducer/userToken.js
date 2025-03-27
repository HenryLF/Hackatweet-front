import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { requestSignIn, requestSignUp } from "../api/users";

const initialState = {
  value: {
    username: null,
    token: null,
  },
};

export const signUp = createAsyncThunk(
  "signUp",
  async ({ username, password }, thunkAPI) => {
    let jsonData = await requestSignUp(username, password);
    if (jsonData.result) {
      return jsonData.data;
    }
    return thunkAPI.rejectWithValue(jsonData.message);
  }
);

export const signIn = createAsyncThunk(
  "signIn",
  async ({ username, password }, thunkAPI) => {
    let jsonData = requestSignIn({ username, password });
    if (jsonData.result) {
      return jsonData.data;
    }
    return thunkAPI.rejectWithValue(jsonData);
  }
);

const userToken = createReducer(initialState, (build) => {
  build
    .addCase(signUp.fulfilled, (state, action) => {
      console.log(action);
      state.value = action.payload;
    })
    .addCase(signUp.rejected, (_, action) => {
      window.alert(action.payload);
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.value = action.payload;
    })
    .addCase(signIn.rejected, (_, action) => {
      state.value = action.payload;
    });
});

export default userToken;
