import React from "react";
import Navbar from "./navbar/Navbar";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";
import styled from "styled-components";

const MainStyled = styled.div`
 
  display: flex;
  width: 1280px;
  position: relative;
 // width: 100%;

  
  background-color: #969696;
  .Navbar {
    background-color: #000000;
    padding-left: 10px;
    width: 18%;
  }

  .Body {
    width: 60%;
  }
  .Sidebar {
    width: 22%;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <div className="Navbar">
        <Navbar></Navbar>
      </div>
      <div className="Body">
        <Body></Body>
      </div>
      <div className="Sidebar">
        <Sidebar></Sidebar>
      </div>
    </MainStyled>
  );
};

export default Main;
