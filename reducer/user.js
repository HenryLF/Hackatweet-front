import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { requestNewToken, requestSignIn, requestSignUp } from "../api/users";

const initialState = {
  value: {
    username: null,
    token: null,
  },
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ username, password }, thunkAPI) => {
    let jsonData = await requestSignUp(username, password);
    console.log(jsonData);
    if (jsonData.result) {
      return jsonData.data;
    }
    return thunkAPI.rejectWithValue(jsonData.message);
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ username, password }, thunkAPI) => {
    let jsonData = await requestSignIn(username, password);
    console.log(jsonData);
    if (jsonData.result) {
      return jsonData.data;
    }
    return thunkAPI.rejectWithValue(jsonData.message);
  }
);

export const refreshToken = createAsyncThunk(
  "user/renew",
  async ({ token }, thunkAPI) => {
    let jsonData = await requestNewToken(token);
    console.log(jsonData);
    if (jsonData.result) {
      return jsonData.data;
    }
    return thunkAPI.rejectWithValue(jsonData.message);
  }
);

const logOut = createAction("user/logout");

const userToken = createReducer(initialState, (build) => {
  build
    .addCase(logOut, (state, _) => {
      state.value = initialState;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      console.log(action);
      state.value = action.payload;
    })
    .addCase(signUp.rejected, (_, action) => {
      window.alert(action.payload);
    })
    .addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    })
    .addCase(signIn.rejected, (_, action) => {
      window.alert(action.payload);
    })
    .addCase(refreshToken.fulfilled, (state, action) => {
      state.value = action.payload;
    })
    .addCase(refreshToken.rejected, (state, _) => {
      state.value = initialState;
    });
});

export default userToken;
