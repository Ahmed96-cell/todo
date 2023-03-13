import React from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const nav = useNavigate();
  return (
    <h1
      style={{ textAlign: "center", margin: "30px 0 20px " }}
      onClick={() => nav("/")}
    >
      To Do App
    </h1>
  );
};

export default Nav;
