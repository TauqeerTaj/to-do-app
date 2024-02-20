import React from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "@/utils/constants";
import classes from "@/styles/header.module.css";

export default function Header({ data }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <div className={classes.header}>
      <div>
        <h3 className={classes.name}>user: {data.userName}</h3>
      </div>
      <div className={classes.content}>
        <span className={classes.logout} onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
}
