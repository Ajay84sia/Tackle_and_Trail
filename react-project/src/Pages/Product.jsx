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
} from "@chakra-ui/react";
import { AccordionIcon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Product = ({search}) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { products,isLoading } = useSelector((store) => store.productReducer);
  const [page, setPage] = useState(1);
  const[sorting,setSorting]=useState("")
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "")
  const dispatch = useDispatch();
  const obj = {
    params: {
      category: searchParams.getAll("category"),
      title:searchParams.getAll("title"),
      _sort: searchParams.get("order") && ("price"),
      _order:searchParams.get("order"),
      q:searchParams.get("q"),
    },
  };
  const obj2={
    params:{
      _sort: searchParams.get("order") && ("reviews"),
      _order:searchParams.get("order"),
    }
  }

  useEffect(() => {
    dispatch(getproducts(obj,obj2, page));
  }, [page, location.search]);

  const handleSort = (event) => {
    const sortingOption = event.target.dataset.sort;
    setOrder(sortingOption);
  };
  console.log(order)
console.log(sorting)
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
              <span>TENTS</span>
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
                    data-sort="asc"
                    onClick={handleSort}
                  >
                    Price(Low to High)
                  </div>
                  <div
                    className="childhover"
                    data-sort="desc"
                    onClick={handleSort}
                  >
                    Price(High to Low)
                  </div>
                  <div
                    className="childhover"
                    data-sort="top_rated"
                    onClick={handleSort}
                    
                  >
                    Top Rated
                  </div>
                  <div
                    className="childhover"
                    data-sort="desc"
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
              gridTemplateColumns: "repeat(3,1fr)",
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
                  <Card className="card">
                    <CardBody>
                      <Image
                        height="170px"
                        width="170px"
                        margin="auto"
                        textAlign="center"
                        src={el.image}
                       
                      />
                      <Stack mt="6" spacing="3" style={{textAlign:"left"}}>
                        <Text size="md">{el.title}</Text>
                        <Text>({el.reviews})</Text>
                        <Text>{el.category}</Text>
                        <Text color="black" fontSize="2xl">
                          $ {el.price}
                        </Text>
                        <Text>{el.offer}</Text>
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
