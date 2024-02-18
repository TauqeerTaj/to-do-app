import React from "react";
import Login from "@/components/authForm/login";
import SnackBar from "@/components/snackbar";

export default function LoginPage() {
  return (
    <div>
      <SnackBar />
      <Login />
    </div>
  );
}
