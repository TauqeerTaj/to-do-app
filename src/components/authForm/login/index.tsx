import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useRouter } from "next/router";
import { loginUser } from "@/utils/api";
import { openSnackbar } from "@/store/snackbarSlice";

export default function Login() {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  }) as any;
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const snackbarHandler = (error: boolean, message: string): void => {
    dispatch(
      openSnackbar({
        serverError: error,
        errorMessage: message,
      })
    );
    setLoading(false);
  };

  const changeHandler = (e: any): void => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    for (const value in loginData) {
      if (!loginData[value]) {
        setValidation(true);
        setLoading(false);
        return;
      }
    }
    try {
      const response = await loginUser(loginData);
      if (response.token) {
        console.log("token:", response.token);
        snackbarHandler(false, "Successfully Logged in!");
      } else {
        snackbarHandler(true, response.message ?? "Something went wrong");
      }
      setTimeout(() => {
        snackbarHandler(
          response.message ? true : false,
          response.message ?? "Successfully Logged in!"
        );
      }, 2000);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      {loading && <LinearProgress />}
      <Box
        component="form"
        sx={{
          //   "& .MuiTextField-root": { m: 1, width: "50%" },
          width: "50%",
          margin: "auto",
          padding: 5,
          backgroundColor: "#fff",
          borderRadius: 5,
          transform: "translate(0px, 80%)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div>
          <TextField
            error={(validation && !loginData.userName) ?? false}
            label="User Name"
            defaultValue=""
            helperText={
              validation && !loginData.userName ? "Incorrect value" : ""
            }
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            name="userName"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={(validation && !loginData.password) ?? false}
            label="Password"
            defaultValue=""
            helperText={
              validation && !loginData.password ? "Incorrect value" : ""
            }
            type="password"
            sx={{ width: "100%", marginBottom: 2 }}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" size="large" type="submit">
            Login
          </Button>
        </div>
      </Box>
    </>
  );
}
