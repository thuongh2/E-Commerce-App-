import React from "react";
import "./category.css";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Category = () => {
  return (
    <div className="category">
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Category;
