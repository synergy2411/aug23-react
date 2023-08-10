import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAKxo9omNyXHq3QbBvIIB8vLCFl_2TwSI8",
  authDomain: "invesco-aug-23.firebaseapp.com",
});

const firebaseAuth = getAuth(firebaseApp);

export const userRegisterAction = createAsyncThunk(
  "user/register",
  async ({ email, password }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      const token = userCredentials.user.getIdToken();

      return token;
    } catch (err) {
      console.error(err);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      return userCredentials.user.getIdToken();
    } catch (err) {
      console.error(err);
    }
  }
);

export const userLogout = createAsyncThunk("user/logout", async () => {
  try {
    const resp = await signOut(firebaseAuth);
    return;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  token: null,
  isLoading: false,
  errMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userRegisterAction.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("FULFILLED ACTION : ", action);
      state.token = action.payload;
    });
    builder.addCase(userRegisterAction.rejected, (state, action) => {
      state.isLoading = false;
      console.log("REJECTED ACTION : ", action);
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(userLogout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = null;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
