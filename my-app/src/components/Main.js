import React from "react";
import Navbar from "./navbar/Navbar";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="">
        <Body></Body>
      </div>
      <div className="">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Main;
