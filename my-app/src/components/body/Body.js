import React from "react";
import Categary from "./Categary.js";
import styled from "styled-components";
import MainConten from "./MainConten.js";

const BodyStyled = styled.div`
  background-color: aqua;
  padding: 20px;
  width: 100%;
  height: 500px;
 
`;
const Body = () => {
  return (
    <BodyStyled>
      <div className="">
        <Categary ifo="TV Series"></Categary>
        <Categary ifo="Movies"></Categary>
        <Categary ifo="Anime"></Categary>
      </div>
      <div className="content">
        <MainConten></MainConten>
      </div>
      <div className=""></div>
      <div className=""></div>
    </BodyStyled>
  );
};

export default Body;
