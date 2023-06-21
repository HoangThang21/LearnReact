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
    <ListP>
      <div className="tabpopular">
        <div className="img-film">
          <img src={props.img} alt="" />
        </div>
        <div className="ifo-tab">
          <h3>{props.name}</h3>
          <div className="Year-Star">
            <p>{props.year}</p>
            <div className="Star">
              <p>{props.star}</p>
            </div>
          </div>
          <div className="action-theloai">
            <button>{props.category1}</button>
            <button className="btn-2">{props.category2}</button>
            <button>{props.category3}</button>
          </div>
        </div>
      </div>
    </ListP>
  );
};

export default ListPopular;
