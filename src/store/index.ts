import { configureStore } from "@reduxjs/toolkit";
import snackbarSlice from "./snackbarSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
  },
});
export default store;
