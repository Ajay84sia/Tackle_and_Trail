import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Star from "./Star";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { cartPostReq } from "../Redux/CartReducer/action";
import { useToast } from "@chakra-ui/react";

export const SingleProduct = () => {
  const toast = useToast();
  const { id } = useParams();
  const { products } = useSelector((store) => store.productReducer);
  const [quantity, setQuantity] = useState(1);
  const [singleData, setSingleData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    let data = products.filter((el) => {
      return el.id === Number(id);
    });
    setSingleData(data[0]);
  }, []);

  const handleAddToCart = () => {
    const data = { ...singleData, ["quantity"]: quantity };
    delete data["id"]
    dispatch(cartPostReq(data)).then(()=>{
      toast({
        title: `Product Added in the Shopping Cart`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    })
  };

  const handleQuantity = (val) => {
    setQuantity((prev) => prev + val);
  };

  return (
    <>
      <Navbar />
      <Container style={{ height: "120vh", marginTop: "25vh" }}>
        <Container>
          <Wrapper>
            <ImgContainer>
              <Image src={singleData.image} alt={singleData.title} />
            </ImgContainer>
            <Hr />
            <InfoContainer>
              <Title>{singleData.title}</Title>
              <Desc> </Desc>
              <RatingOfProduct>
                <StarRating>
                  <Star
                    stars={singleData.rating}
                    reviews={singleData.reviews}
                  />
                </StarRating>
              </RatingOfProduct>
              <ProductTypeDetails>
                Category: {singleData.category}
              </ProductTypeDetails>
              <Price>$ {singleData.price}</Price>
              <AddConntainer>
                <AmountContainer>
                  <button
                    onClick={() => handleQuantity(-1)}
                    disabled={quantity <= 1}
                    style={{ cursor: "pointer" }}
                  >
                    <RemoveIcon />
                  </button>
                  <Amonunt>{quantity}</Amonunt>
                  <button
                    onClick={() => handleQuantity(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <AddIcon />
                  </button>
                </AmountContainer>
              </AddConntainer>
              <ButtonDiv>
                <Button onClick={handleAddToCart}>Add to cart</Button>
              </ButtonDiv>
            </InfoContainer>
          </Wrapper>
          <DetailsHeader>Product Description</DetailsHeader>
          <br/>
          <ProductDesc>{singleData.description}</ProductDesc>
        </Container>
      </Container>
      <Footer />
    </>
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
  margin-top: 100px;
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
`;
const ButtonDiv1 = styled.div`
  display: flex;
  height: 100px;
  justify-content: left;
  align-items: center;
  margin-top: -20px;
`;
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
  background-color: white;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`;
const RatingOfProduct = styled.div`
  /* border: 1px solid black; */
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
  margin-top: 10px;
  margin-right: 20px;
  text-align: left;
`;
const ProductDesc = styled.p`
  width: 80%;
  padding-left: 20px;
  text-align: justify;
  font-weight: lighter;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 5; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
`;
const ProductTypeDetails = styled.p``;
const ProductSize = styled.p``;
const DetailsHeader = styled.h1`
  text-align: left;
  margin-left: 20px;
  font-size: larger;
  font-weight: bold;
`;
