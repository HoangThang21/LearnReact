import React from "react";
import styled from "styled-components";

const ListP = styled.div`
  margin-top: 10px;
  .tabpopular {
    display: flex;
    height: 100px;
    padding: 10px;
    background-color: #242424;
    border-radius: 8px;
  }
  .img-film {
    width: 80px;
    height: 80px;
    img {
      border-radius: 8px;
    }
  }
  .ifo-tab {
    padding-left: 10px;
    color: white;
  }
  .Year-Star {
    display: flex;
    width: 170px;
    p {
      color: #8f8f8f;
      font-weight: 300;
    }
  }
  .Star {
    margin-left: 100px;
  }
  .action-theloai {
    button {
      background-color: transparent;
      border: 1px solid #8f8f8f;
      color: white;
      text-align: center;
      width: auto;
      padding: 3px 5px;
      font-size: 11px;
      margin-top: 10px;
    }
    .btn-2 {
      margin: 0 5px;
    }
  }
`;
const ListPopular = (props) => {
  return (
    console.log(props),
    (
      <ListP>
        <div className="tabpopular">
          <div className="img-film">
            <img
              src="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
          </div>
          <div className="ifo-tab">
            <h3>Name film</h3>
            <div className="Year-Star">
              <p>2023</p>
              <div className="Star">
                <p>10</p>
              </div>
            </div>
            <div className="action-theloai">
              <button>Action</button>
              <button className="btn-2">Action</button>
              <button>Action</button>
            </div>
          </div>
        </div>
      </ListP>
    )
  );
};

export default ListPopular;
