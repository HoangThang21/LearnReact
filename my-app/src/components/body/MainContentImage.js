import React from "react";
import styled from "styled-components";

const MainContentStyled = styled.div`
width: 200px;
height: 300px;
display: inline-block;
transition: 0.5s;
position: absolute;
top: 50%;
transform: translate(0,-50%);
border-radius: 10px;
box-shadow: 0 30px 50px #505050;
  .imgsilder {
    /* width: 718px;
    height: 300px; */
    background-size: cover;
    //transition: 0.5s;
    z-index: 1;
    border-radius: 10px;
    //transform: translate(-50%);
  }
`;
const MainContentImage = () => {
  return (
    <MainContentStyled>
     
    </MainContentStyled>
  );
};

export default MainContentImage;
