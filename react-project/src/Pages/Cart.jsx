import React from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const Container = styled.div`


`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  font-weight:bolder;
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
  text-decoration: underline;
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
font-weight:200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type ==="total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ButtonSummary = styled.button`
width:100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 100;
`;

const TopContainer = styled.div`
    width: 90%;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    margin: auto;
`

const HeadersContainer = styled.div``;


export const Cart = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SHOPPING CART</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
            </TopTexts>
            <TopButton type="filled">Check Store Availability</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2610680.json?$BPSite_CartTN,w_200,dpr_2.0$" />
                  <Details>
                    <ProductName>
                      JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                     131241
                    </ProductId>
                    <ProductSize>
                      Remove
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <ProductArrivalDetails>
                    <LocalShippingIcon/>
                    <ProductArrivalPlace>
                       Ship To Address
                    </ProductArrivalPlace>
                </ProductArrivalDetails>
                <PriceDetail>
                  <ProductAmountContainer>
                    <RemoveIcon />
                    <ProductAmount>2</ProductAmount>
                    <AddIcon />
                  </ProductAmountContainer>
                </PriceDetail>
                <ProductPrice>$ 30</ProductPrice>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2610680.json?$BPSite_CartTN,w_200,dpr_2.0$" />
                  <Details>
                    <ProductName>
                      JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                     131241
                    </ProductId>
                    <ProductSize>
                      Remove
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <ProductArrivalDetails>
                    <LocalShippingIcon/>
                    <ProductArrivalPlace>
                       Ship To Address
                    </ProductArrivalPlace>
                </ProductArrivalDetails>
                <PriceDetail>
                  <ProductAmountContainer>
                    <RemoveIcon />
                    <ProductAmount>2</ProductAmount>
                    <AddIcon />
                  </ProductAmountContainer>
                </PriceDetail>
                <ProductPrice>$ 30</ProductPrice>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle> ORDER SUMMARY </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText> Shipping</SummaryItemText>
                <SummaryItemPrice>Free</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>Free</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total" >
                <SummaryItemText>Cart Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <ButtonSummary>CHECKOUT NOW</ButtonSummary>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};
