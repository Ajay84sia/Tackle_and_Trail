import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDelReq,
  cartGetReq,
  cartPatchReq,
} from "../Redux/CartReducer/action";
import { NavLink } from "react-router-dom";
import { element } from "prop-types";
import { Center, Image as IMG, useToast } from "@chakra-ui/react";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  font-weight: bolder;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
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
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductArrivalDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductArrivalPlace = styled.p``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
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

const ButtonSummary = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 100;
  cursor: pointer;
`;

const TopContainer = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const HeadersContainer = styled.div``;

export const Cart = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    dispatch(cartGetReq());
  }, []);

  const handleCartTotal = () => {
    const total = cart.reduce((acc, item) => {
      return acc + Math.round(item.price * item.quantity);
    }, 0);

    setCartTotal(total);
  };

  const handleDelete = (id) => {
    dispatch(cartDelReq(id)).then((res) => {
      dispatch(cartGetReq()).then(() => {
        toast({
          title: `Product removed from the shopping bag`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
    });
  };

  const handleCartQuantity = (id, quantity, val) => {
    const total = quantity + val;

    dispatch(cartPatchReq(id, total)).then((res) => {
      dispatch(cartGetReq());
    });
  };

  useEffect(() => {
    handleCartTotal();
  });

  const handleOrder = () => {
    axios
      .post(`https://tackle-and-trail.onrender.com/orders`, {
        cart,
        ["cartTotal"]: cartTotal + 5,
        ["totalItems"]: cart.length,
        ["status"]: "Pending",
      })
      .then((res) => {
        console.log("done");
      })
      .catch((err) => console.log("err"));
  };
  return (
    <>
      <Navbar />
      <Container style={{ height: "auto", marginTop: "28vh" }}>
        <Wrapper>
          <Title>SHOPPING CART</Title>
          <Top>
            <NavLink to="/shooting">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </NavLink>
            <TopTexts>
              {cart.length > 0 && (
                <TopText>Cart Contains - {cart.length} items</TopText>
              )}
            </TopTexts>
            <TopButton type="filled">Check Store Availability</TopButton>
          </Top>
          {cart.length == 0 ? (
            <Center>
              <IMG
                src="https://www.eyecatchers.in/shop-online/images/cart-empty.jpg"
                alt="emptyCart"
                marginTop="-40px"
                marginBottom="50px"
              />
            </Center>
          ) : (
            <Bottom>
              <Info>
                {cart &&
                  cart.map((el, i) => {
                    return (
                      <>
                        <Product>
                          <ProductDetail>
                            <Image src={el.image} alt={el.title} />
                            <Details>
                              <ProductName>{el.title}</ProductName>
                              <ProductId>{`T&T-16561${el.id}`}</ProductId>
                              <button onClick={() => handleDelete(el.id)}>
                                <ProductSize>Remove</ProductSize>
                              </button>
                            </Details>
                          </ProductDetail>
                          <ProductArrivalDetails>
                            <LocalShippingIcon />
                            <ProductArrivalPlace>
                              Ship To Address
                            </ProductArrivalPlace>
                          </ProductArrivalDetails>
                          <PriceDetail>
                            <ProductAmountContainer>
                              <button
                                onClick={() =>
                                  handleCartQuantity(el.id, el.quantity, -1)
                                }
                              >
                                <RemoveIcon />
                              </button>
                              <ProductAmount>{el.quantity}</ProductAmount>
                              <button
                                onClick={() =>
                                  handleCartQuantity(el.id, el.quantity, 1)
                                }
                              >
                                <AddIcon />
                              </button>
                            </ProductAmountContainer>
                          </PriceDetail>
                          <ProductPrice>
                            $ {Math.round(el.price * el.quantity)}
                          </ProductPrice>
                        </Product>
                      </>
                    );
                  })}

                <Hr />
              </Info>
              <Summary>
                <SummaryTitle> ORDER SUMMARY </SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {cartTotal}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText> Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>Free</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Cart Total</SummaryItemText>
                  <SummaryItemPrice>$ {cartTotal + 5}</SummaryItemPrice>
                </SummaryItem>
                <NavLink to="/payment">
                  <ButtonSummary onClick={handleOrder}>
                    CHECKOUT NOW
                  </ButtonSummary>
                </NavLink>
              </Summary>
            </Bottom>
          )}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
