import React from "react";
import ListPopular from "./ListPopular";
import styled from "styled-components";
import { data } from "../../data";
const Sidebarifo = styled.div`
  margin: 10px;
  .title {
    font-weight: 500;
    margin: 15px 0;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }

  .search__input {
    font-family: inherit;
    font-size: inherit;
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    width: 90%;
    margin: 10px;
    transition: all ease-in-out 0.5s;
    margin-right: -2rem;
  }

  .search__button {
    border: none;
    background-color: #f4f2f2;
    margin-top: 0.1em;
    margin-right: 20px;
  }

  .search__icon {
    height: 1.3em;
    width: 1.3em;
    fill: #b4b4b4;
  }
  .seemore {
    width: 100%;
    background-color: red;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 7px;
    color: white;
    margin-top: 10px;
  }
`;
const Sidebar = () => {
  return (
    <Sidebarifo>
      <div className="">
        <div class="search">
          <input type="text" class="search__input" placeholder="Quick search" />
          <button class="search__button">
            <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="">
        <h3 className="title">Popular movies</h3>
        {data.map((item, index) => (
          <ListPopular item={item}></ListPopular>
        ))}
      </div>

      <button className="seemore">See more</button>

      <div className="">
        <h3 className="title">WatchsLists</h3>
        {data.map((item, index) => (
          <ListPopular item={item}></ListPopular>
        ))}
      </div>
      <button className="seemore">See more</button>
    </Sidebarifo>
  );
};

export default Sidebar;
