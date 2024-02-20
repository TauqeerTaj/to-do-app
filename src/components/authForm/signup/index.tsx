import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { validRegex } from "@/utils/constants";

export default function Signup() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    email: "",
    password: "",
  }) as any;
  const [validation, setValidation] = useState(false);

  const router = useRouter();

  const changeHandler = (e: any) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    for (const value in register) {
      if (
        !register[value] ||
        (register.email.length > 1 && !register.email.match(validRegex))
      ) {
        setValidation(true);
        return;
      } else {
        router.replace("/login");
      }
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          //   "& .MuiTextField-root": { m: 1, width: "50%" },
          width: "50%",
          margin: "auto",
          padding: 5,
          backgroundColor: "#fff",
          borderRadius: 5,
          transform: "translate(0px, 15%)",
          ["@media (max-width:768px)"]: { transform: "translate(0px, 50px)" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div>
          <TextField
            error={(validation && !register.firstName) ?? false}
            label="First Name"
            defaultValue=""
            helperText={
              validation && !register.firstName ? "Incorrect value" : ""
            }
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            name="firstName"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={(validation && !register.lastName) ?? false}
            label="Last Name"
            defaultValue=""
            helperText={
              validation && !register.lastName ? "Incorrect value" : ""
            }
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            name="lastName"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={(validation && !register.userName) ?? false}
            label="User Name"
            defaultValue=""
            helperText={
              validation && !register.userName ? "Incorrect value" : ""
            }
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            name="userName"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={(validation && !register.gender) ?? false}
            label="Gender"
            defaultValue=""
            helperText={validation && !register.gender ? "Incorrect value" : ""}
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            name="gender"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={
              ((validation && !register.email) ||
                (register.email.length > 0 &&
                  !register.email.match(validRegex) &&
                  validation)) ??
              false
            }
            label="Email"
            defaultValue=""
            helperText={
              (validation && !register.email) ||
              (register.email.length > 1 &&
                !register.email.match(validRegex) &&
                validation)
                ? "Incorrect value"
                : ""
            }
            sx={{ width: "100%", marginBottom: 2 }}
            type="email"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div>
          <TextField
            error={(validation && !register.password) ?? false}
            label="Password"
            defaultValue=""
            helperText={
              validation && !register.password ? "Incorrect value" : ""
            }
            type="password"
            sx={{ width: "100%", marginBottom: 2 }}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" size="large" type="submit">
            Sign up
          </Button>
        </div>
      </Box>
    </>
  );
}
