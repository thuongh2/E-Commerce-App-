import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Add, Remove } from "@material-ui/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile } from "../../reponsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { changeProduct, deleteCart } from "../../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 26px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 300;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
`;

const Product = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProductPrice = styled.div`
  flex: 1;
  font-size: 30px;
  font-width: 200;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        history.push("/success");
      } catch (error) {
        console.error(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const handleQuantity = (type, product) => {
    setQuantity(product.quantity);

    if (type === "dec") {
      quantity > 0 ? setQuantity(quantity - 1) : setQuantity(1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
    
    const price = quantity * product.price - product.quantity * product.price;

    dispatch(changeProduct({ ...product, quantity, price }));
  };

  const handleDelete = (product) => {
    dispatch(deleteCart(product));
  };

  return (
    <Container>
      <Navbar />
      {/* Cart */}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopButton type="filled">CHECK NOW</TopButton>
        </Top>
        {/* products */}
        <Bottom>
          <Info>
            {cart.products?.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  {/* Change amount */}
                  <ProductAmountContainer>
                    <Add onClick={() => handleQuantity("inc", product)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove onClick={() => handleQuantity("dec", product)} />
                  </ProductAmountContainer>
                  {/* End */}
                  <ProductPrice>
                    {product.price * product.quantity}
                  </ProductPrice>
                  <DeleteIcon onClick={() => handleDelete(product)} />
                </PriceDetail>
              </Product>
            ))}
          </Info>
          {/* Sumary */}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="THUONG Shop"
              image="https://cloud.mongodb.com/v2#/org/62b18b8ac5ad7a107e8f4b6b/"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
          {/* End */}
        </Bottom>
        {/* end */}
      </Wrapper>
      {/* End */}
      <Footer />
    </Container>
  );
};

export default Cart;
