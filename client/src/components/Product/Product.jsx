import React, { useEffect, useState } from "react";
import "./product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const Product = ({ item }) => {



  return (
    <div className="product">
      <div className="productCircle"></div>
      <img src={item.img} alt="" />
      <div className="productInfo">
        <div className="productIcon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="productIcon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className="productIcon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
