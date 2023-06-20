import React from "react";
import Navbar from "./navbar/Navbar";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";
import styled from "styled-components";

const MainStyled = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;

    outline: none;

  }
  body {
    min-height: 100vh;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
  }
  display: flex;
  .Navbar {
    background-color: pink;
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
