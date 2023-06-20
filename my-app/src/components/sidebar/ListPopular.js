import React from "react";

const ListPopular = () => {
  return (
    <div>
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
          <button>Action</button>
        </div>
      </div>
    </div>
  );
};

export default ListPopular;
