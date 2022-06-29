import React, { useState } from "react";
import "./navbar.css";
import { Search } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  const handleSearch = (e) => {
    const search = async () => {
      try {
        const res = await publicRequest.get(
          "products/find/name/" + searchQuery
        );
        setFilteredName(res.data);
      } catch (err) {}
    };

    setSearchQuery(e.target.value);
    if (searchQuery) search();
  };

  console.log(filteredName);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="search">
          <span className="language">EN</span>
          <div className="searchContainer" >
            <input type="text" onChange={handleSearch} />
            <Search onClick={handleSearch} />
          </div>
          {filteredName.length > 0 && <div className="searchBox">
            {filteredName.map((item) => (
            <Link key={item._id} className="searchLink" to={`/product/${item._id}`}>
              <div className="searchItem">
                <div>
                  <img src={item.img} className="searchImg"></img>
                </div>
                <div>
                  <p className="searchName"> {item.title}</p>
                  <p className="searchName"> {item.price} VNĐ</p>
                </div>
              </div>
              </Link>
            ))}
          </div>}
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
