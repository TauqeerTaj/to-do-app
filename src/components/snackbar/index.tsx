import React from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { snackbar } from "@/utils/constants";

export default function SnackBar() {
  const snackbarState = useSelector((state: snackbar) => state.snackbar);

  return (
    <Snackbar
      open={snackbarState.openSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      key={"top" + "center"}
    >
      <Alert
        severity={snackbarState.serverError ? "error" : "success"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbarState.errorMessage}
      </Alert>
    </Snackbar>
  );
}
