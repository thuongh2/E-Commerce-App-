import React from "react";
import "./navbar.css";
import { Search } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

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
        <Link to="/" className="logoLink">
          <div className="logo">
            <h1>THUONG</h1>
          </div>
        </Link>
        <div className="action">
          {!user ? (
            <>
              <Link to="/register">
                <div className="menuItem">REGISTER</div>
              </Link>
              <Link to="/login">
                <div className="menuItem">SIGN IN</div>
              </Link>
            </>
          ) : (
            <div className="menuItem">{user.username}</div>
          )}

          <Link to="/cart">
            <div className="menuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
