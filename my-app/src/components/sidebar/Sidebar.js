import React from "react";
import ListPopular from "./ListPopular";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <input type="text" />
        <span>a</span>
      </div>
      <div className="">
        <h3>Popular movies</h3>
        <ListPopular></ListPopular>
      </div>

      <div className="">
        <h3>WatchsLists</h3>
        <ListPopular></ListPopular>
      </div>
    </div>
  );
};

export default Sidebar;
