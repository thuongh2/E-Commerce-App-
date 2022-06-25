import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Slider from "../../components/slider/Slider";
import Mail from "../../components/Mail/Mail";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category/>
      <Products/>
      <Mail/>
      <Footer/>
    </div>
  );
};

export default Home;
