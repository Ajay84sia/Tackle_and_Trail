import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { getproducts } from "../Redux/productReducer/action";
import { Page } from "./Pagination";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./product.css";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { AccordionIcon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function StarFunc({ rating }) {
  const maxRating = 5;

  return (
    <Flex align="center">
      {[...Array(maxRating)].map((_, index) => {
        const isFilled = index < rating;

        return (
          <Box key={index} color={isFilled ? "grey" : "gray.300"} mr={1} >
            <StarIcon style={{height:"10px",width:"10px"}}/>
          </Box>
        );
      })}
      <Text fontSize="sm">{rating}</Text>
    </Flex>
  );
}




export const Product = ({endpoint, search}) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { products,isLoading } = useSelector((store) => store.productReducer);
  const [page, setPage] = useState(1);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "")
  const initialSort=searchParams.get("sort")
  const[sort,setSort]=useState(initialSort||"")
  const dispatch = useDispatch();
  const obj = {
    params: {
      category: searchParams.getAll("category"),
      title:searchParams.getAll("title"),
      _sort: sort === "price" || sort === "reviews"||sort==="rating" ? sort : undefined,
      _order:searchParams.get("order"),
      q:searchParams.get("q"),
    },
  };

  const handleSort = (event) => {
    const sortType = event.target.dataset.sort;
    const orderdata=event.target.dataset.value1
  
    if (sort === sortType) {
      setOrder(orderdata);
    } else {
      setSort(sortType);
      setOrder("");
    }
  };

  useEffect(() => {
    dispatch(getproducts(endpoint,obj, page));
  }, [page, location.search]);

console.log(sort)
  console.log(order)

console.log(isLoading)

if(isLoading){
  console.log(isLoading)
  return <Spinner
  style={{textAlign:"center",marginTop:"300px"}}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
}
  return (
    <>
      <div className="wrapper">
        <Sidebar page={page} order={order} search={search}/>
        <div
          style={{
            borderLeft: "1px solid grey",
            height: "auto",
            float: "right",
            marginLeft: "20px",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="upper">
            <span style={{ textTransform: "uppercase" }}>{endpoint}</span>
              <br />
              <br />
            </div>

            <div style={{ textAlign: "right" }} className="top-div">
              <Menu className="menu">
                <MenuButton
                  className="menu"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Sort By:Brand
                </MenuButton>
                <MenuList className="childmenu" zIndex={15} onKeyDown>
                  <div
                    className="childhover"
                    data-sort="relevance"
                    onClick={handleSort}
                  >
                    Relevance
                  </div>
                  <div
                    className="childhover"
                    data-sort="brands"
                    onClick={handleSort}
                  >
                    Brands
                  </div>
                  <div
                    className="childhover"
                    data-sort="name"
                    onClick={handleSort}
                  >
                    Name
                  </div>
                  <div
                    className="childhover"
                    data-sort="price"
                    onClick={handleSort}
                    data-value1="asc"
                  >
                    Price(Low to High)
                  </div>
                  <div
                    className="childhover"
                    data-sort="price"
                    data-value1="desc"
                    onClick={handleSort}
                  >
                    Price(High to Low)
                  </div>
                  <div
                    className="childhover"
                    data-sort="rating"
                    data-value1="desc"
                    onClick={handleSort}
                    
                  >
                    Top Rated
                  </div>
                  <div
                    className="childhover"
                    data-sort="reviews"
                    data-value1="desc"
                    onClick={handleSort}
                   
                  >
                    Most Reviewed
                  </div>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: "15px",
              gridTemplateColumns: "repeat(4,1fr)",
              height: "auto",
              width: "100%",
              marginLeft: "10px",
              marginTop: "20px",
            }}
            className="bottom-div"
          >
            {products.map((el) => {
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Card maxW="sm" className="card">
                    <CardBody>
                      <Image
                        height="170px"
                        width="170px"
                        margin="auto"
                        textAlign="center"
                        src={el.image}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3" style={{textAlign:"left"}}>
                        <Text size="md">{el.title}</Text>
                        <Text>({el.reviews})</Text>
                        <Text>{el.category}</Text>
                        <Text color="black" fontSize="2xl">
                          $ {el.price}
                        </Text>
                        <Text>{el.offer}</Text>
                        <Text>{el.description}</Text>
                        <StarFunc rating={el.rating}/>
                      </Stack>
                    </CardBody>               
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <Page page={page} setPage={setPage}  />
    </>
  );
          
};

