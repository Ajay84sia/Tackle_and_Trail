import React, { useState } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Star from "./Star";
import { useParams } from "react-router-dom";


export const SingleProductPage = ({stars,review}) => {
   const [quanity,setQuanity] = useState(1);
  const params = useParams();

  console.log(params)

   const handleRemove = () => {
       setQuanity(quanity-1);
    }
    const handleAdd = () => {
        setQuanity(quanity+1);
    }

    const handleCart = () => {
        console.log("Product is added to cart")
    }

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/4410647.json?$BPSSite_Rec140$" />
        </ImgContainer>
        <Hr />
        <InfoContainer>
          <Title>Killer Instinct Lethal 405 Crossbow Package</Title>
          <RatingOfProduct>
            <StarRating stars={stars} review={review}>
                <Star/>
            </StarRating>  
          </RatingOfProduct>
          <Desc>
          SAVE TODAY! Pay $229.99 with $20 in CLUB Points upon approval to use on today's order.
          </Desc>
          <Price>$ 34.99</Price>
          <ProductTypeDetails>
            Category: Fishing Rod
          </ProductTypeDetails>
          <ProductSize>
            Size:10lbs
          </ProductSize>
          <ProductQuantity>Quantity:{quanity}</ProductQuantity>
          <AddConntainer>
            <AmountContainer>
              <RemoveIcon onClick={handleRemove} disable={quanity===1}/>
              <Amonunt>1</Amonunt>
              <AddIcon onClick={handleAdd}  />
            </AmountContainer>
          </AddConntainer>
          <ButtonDiv>
            <Button onClick={handleCart}>Add to cart</Button>
          </ButtonDiv>
        </InfoContainer>
      </Wrapper>
      <DetailsHeader>Product Details</DetailsHeader>
      <ProductDesc>
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
            </ProductDesc>
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
  font-size: 15px;
  font-weight: bold;
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
const ButtonDiv = styled.div`
    display: flex;
    height: 100px;
    justify-content: left;
    align-items: center;
`
const ButtonDiv1 = styled.div`
    display: flex;
    height: 100px;
    justify-content: left;
    align-items: center;
    margin-top: -20px;
`
const Button = styled.button`
  width: 50%;
  padding: 15px;
  border: 2px solid teal;
  background-color: #075521;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`;
const Buttonn = styled.button`
  width: 50%;
  padding: 15px;
  border: 2px solid teal;
  background-color:white;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`;
const RatingOfProduct = styled.div`
  /* border: 1px solid black; */
  margin-top: -30px;
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
const ProductQuantity = styled.h3``;
const ProductDetails = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  text-align: left;
`;
const  ProductDesc = styled.p`
  width: 80%;
  padding-left:20px;
 text-align: justify;
 font-weight: lighter;
`
const ProductTypeDetails = styled.p`
`;
const ProductSize = styled.p`
`;
const DetailsHeader = styled.h1`
text-align: left;
margin-left: 20px;
`

