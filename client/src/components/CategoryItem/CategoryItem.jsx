import React from "react";
import { Link } from "react-router-dom";
import "./categoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <Link to={`/products/${item.cat}`}>
        <img className="categoryImg" src={item.img} alt="" />
        <div className="categoryInfo">
          <div className="categoryTitle">
            <h1>{item.title}</h1>
          </div>
          <div className="categoryBtn">
            <button className="">SHOP NOW</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
