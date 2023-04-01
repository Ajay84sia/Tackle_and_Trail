import React from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const params = useParams();

  console.log(params)

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/4410647.json?$BPSSite_Rec140$" />
          <ProductDetails>
            <h1>Product Details</h1>
            <p>
              Offering incredible velocities of up to 405 fps, the Killer
              Instinct® Lethal 405 Crossbow Package is rugged, lightweight, and
              quiet. The lightweight composite frame features an over molded
              grip and adjustable X-Lok forearm piece for maximum comfort and
              control, while the included 4x32 scope extends your overall range.
              Integrated rubber suppressors boast quiet, stealthy performance
              and lightweight carbon bolts offer improved accuracy. Plus, a
              lightweight, consistent trigger ensures reduced anticipation and
              steady control. This crossbow package includes a rope cocker,
              3-bolt quiver, string suppressors, 3 Killer Instinct HYPR Lite
              Carbon Crossbolts with field tips, and rail lubricant, ensuring
              you're ready for target practice, right out of the box!
            </p>
          </ProductDetails>
        </ImgContainer>
        <Hr />
        <InfoContainer>
          <Title>Killer Instinct Lethal 405 Crossbow Package</Title>
          <RatingOfProduct>
            <StarRating>######</StarRating>
            <StarRatinView>3.9(398)</StarRatinView>
            <WirteReview>Write Review</WirteReview>
          </RatingOfProduct>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga,
            amet mollitia cupiditate iure ea molestias iusto possimus doloremque
            nam explicabo enim harum dolorem consequatur. Qui porro vel vitae
            accusamus.
          </Desc>
          <Price>$ 34.99</Price>
          <ProductQuantity>Quantity:</ProductQuantity>
          <AddConntainer>
            <AmountContainer>
              <RemoveIcon />
              <Amonunt>1</Amonunt>
              <AddIcon />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddConntainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 600px;
  justify-content: center;
  margin-left: 150px;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
`;
const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-right: px solid black;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  text-align: left;
`;
const Title = styled.h1`
  font-weight: bolder;
`;
const Desc = styled.p`
  width: 80%;
  margin: 20px 0px;
  text-align: justify;
`;
const Price = styled.span`
  font-weight: bolder;
  font-size: 40px;
`;

const AddConntainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amonunt = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const RatingOfProduct = styled.div`
  border: 1px solid black;
  height: 40px;
  width: 60%;
`;
const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
`;

const StarRating = styled.a`
  cursor: pointer;
`;
const StarRatinView = styled.a`
  cursor: pointer;
`;

const WirteReview = styled.a`
  cursor: pointer;
`;

const ProductQuantity = styled.h3``;

const ProductDetails = styled.div`
  border: 1px solid black;
  margin-top: 30px;
  margin-right: 20px;
`;
