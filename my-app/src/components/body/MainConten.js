import React, { useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import MainContentImage from "./MainContentImage";
import styled from "styled-components";

const MainaStyled = styled.div`
  .slide {
    position: absolute;
    background-position: 50% 50%;
    background-color: #f5f5f5;

    width: 718px;
    height: 500px;
  }

  .slider {
    width: 100%;
    height: 100%;
  }
  .mainabs {
    width: 200px;
    height: 300px;
    display: inline-block;
    transition: 0.5s;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 10px;
    box-shadow: 0 30px 50px #505050;

    /* .imgsilder{
        background-size: 100% 100%;
        object-fit: cover;
    } */
    transition: 0.5s;
    z-index: 1;
    border-radius: 10px;
  }
  .mainabs:nth-child(1),
  .mainabs:nth-child(2) {
    top: 0;
    left: 0;
    transform: translate(0, 0);
    width: 718px;
    height: 100px;
    box-shadow: none;
  }
  .mainabs:nth-child(3) {
    left: 40%;
  }
  .mainabs:nth-child(4) {
    left: calc(40% + 200px);
  }
  .mainabs .content {
    position: absolute;
    top: 50%;
    left: 100px;
    width: 300px;
    text-align: left;
    padding: 0;
    color: white;
    transform: translate(0, -50%);
    display: none;
  }
  .mainabs:nth-child(2) .content {
    display: block;
  }
  .mainabs .content h2 {
    opacity: 0;
    animation: identifier 1s ease-in-out 1 forwards;
  }
  @keyframes identifier {
    from {
      opacity: 0;
      transform: translate(0, 100px);
      filter: blur(33px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
      filter: blur(0px);
    }
  }
  .buttons {
    /* position: absolute; */
    position: relative;
   top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    z-index: 222;
    display: flex;
    .buton1 {
      cursor: pointer;
    }
    .buton1:nth-child(2) {
      margin-left: 20px;
    }
  }
`;
const MainConten = () => {
  useEffect(() => {
    document.getElementById("next").onclick = function () {
      let lists = document.querySelectorAll(".mainabs");
      document.getElementById("slide").appendChild(lists[0]);
    };
    document.getElementById("prev").onclick = function () {
      let list = document.querySelectorAll(".mainabs");
      document.getElementById("slide").prepend(list[list.length - 1]);
    };
  });
  return (
    <MainaStyled>
      <div className="slide" id="slide">
        
          <div className="mainabs">
            <img
              className="imgsilder"
              src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="content">
              <h2>Name film</h2>
              <div className="action-theloai">
                <button>e</button>
                <button className="btn-2">a</button>
                <button>b</button>
              </div>
              <button> Watch </button>
            </div>
          </div>
          <div className="mainabs">
            <img
              className="imgsilder"
              src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="content">
              <h2>Name film2</h2>
              <div className="action-theloai">
                <button>e</button>
                <button className="btn-2">a</button>
                <button>b</button>
              </div>
              <button> Watch </button>
            </div>
          </div>
          <div className="mainabs">
            <img
              className="imgsilder"
              src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="content">
              <h2>Name film3</h2>
              <div className="action-theloai">
                <button>e</button>
                <button className="btn-2">a</button>
                <button>b</button>
              </div>
              <button> Watch </button>
            </div>
          </div>{" "}
          <div className="mainabs">
            <img
              className="imgsilder"
              src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="content">
              <h2>Name film4</h2>
              <div className="action-theloai">
                <button>e</button>
                <button className="btn-2">a</button>
                <button>b</button>
              </div>
              <button> Watch </button>
            </div>
          </div>
          {/* <MainContentImage className="item"></MainContentImage>
          <MainContentImage className="item"></MainContentImage>
          <MainContentImage className="item"></MainContentImage>
          <MainContentImage className="item"></MainContentImage> */}
        </div>
      
      <div className="buttons">
        <div className="buton1" id="prev">
          lui
          {/* <BsArrowLeft></BsArrowLeft> */}
        </div>
        <div className="buton1" id="next">
          toi
          {/* <BsArrowRight></BsArrowRight> */}
        </div>
      </div>
    </MainaStyled>
  );
};

export default MainConten;
