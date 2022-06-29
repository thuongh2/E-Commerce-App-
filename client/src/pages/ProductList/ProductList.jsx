import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Mail/Mail";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import { mobile } from "../../reponsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: 0 })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Options = styled.option``;

const ProductList = (props) => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [fillter, setFillter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFillter({
      ...fillter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Options>Color</Options>
            <Options>white</Options>
            <Options>black</Options>
            <Options>red</Options>
            <Options>blue</Options>
            <Options>yellow</Options>
            <Options>green</Options>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Options>Size</Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Options value={"newest"}>Newest</Options>
            <Options value={"asc"}>Price (asc)</Options>
            <Options value={"desc"}>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} fillter={fillter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
