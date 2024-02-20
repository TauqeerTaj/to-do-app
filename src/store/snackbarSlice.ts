import { createSlice } from "@reduxjs/toolkit";
import { SnackbarDetails } from "@/utils/constants";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    openSnackbar: false,
    serverError: false,
    errorMessage: "",
  } as SnackbarDetails,
  reducers: {
    openSnackbar(state, action) {
      state.openSnackbar = !state.openSnackbar;
      state.serverError = action.payload.serverError;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});
export default snackbarSlice.reducer;
export const { openSnackbar } = snackbarSlice.actions;
