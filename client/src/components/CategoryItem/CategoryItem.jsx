import React from "react";
import "./categoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img src={item.img} alt="" />
      <div className="categoryInfo">
        <div className="categoryTitle">
          <h1>{item.title}</h1>
        </div>
        <div className="categoryBtn">
          <button className="">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
