import React from "react";
import "./navbar.css";
import { Search } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="search">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input type="text" />
            <Search />
          </div>
        </div>
        <div className="logo">
          <h1>THUONG</h1>
        </div>
        <div className="action">
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
