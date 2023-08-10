import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

      console.log("User Credentials : ", userCredentials);

      return "";
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  token: null,
  isLoading: false,
  errMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

const authReducer = authSlice.reducer;

export default authReducer;
