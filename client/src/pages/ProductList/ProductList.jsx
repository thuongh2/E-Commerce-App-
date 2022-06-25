import React from "react";
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

  ${mobile({   marginRight: 0 })}

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({   margin: "10px 0px" })}

`;

const Options = styled.option``;

const ProductList = (props) => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Options disabled selected>
              Color
            </Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Green</Options>
          </Select>
          <Select>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Options selected>Newest</Options>
            <Options>Price (asc)</Options>
            <Options>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
