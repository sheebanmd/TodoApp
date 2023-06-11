import { createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const registerUser = (email, password, name) => (dispatch) => {
  dispatch(setLoading(true));
  createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateProfile(auth.currentUser, {
        displayName: name,
      })
    )
    .then((res) => console.log(res))
    .catch((err) => dispatch(setError(err.message)))
    .finally(() => dispatch(setLoading(false)));
};

export const signInUser = (email, password) => (dispatch) => {
  dispatch(setLoading(true));
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => dispatch(setError(err.code)))
    .finally(() => dispatch(setLoading(false)));
};

export const logoutUser = () => (dispatch) => {
  signOut(auth);
};

export const onAuthStateChangedAsync = () => (dispatch) => {
  dispatch(setLoading(true));
  const unsubscribe = onAuthStateChanged(auth, (res) => {
    if (res) {
      dispatch(setUser(res));
    } else {
      dispatch(setUser(null));
    }
    dispatch(setError(""));
    dispatch(setLoading(false));
  });
  return unsubscribe;
};

export default userSlice.reducer;
