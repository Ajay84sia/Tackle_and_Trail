import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getproducts } from "../Redux/productReducer/action";
import {Pagination} from "./Pagination"
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./product.css"
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
import { AccordionIcon } from "@chakra-ui/react";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Product = () => {
  const [searchParams]=useSearchParams()
 
  console.log(useSearchParams())
  const{products}=useSelector((store)=>store.productReducer)
  const[page,setPage]=useState(1)
  const initialOrder=searchParams.get("order")
  const[order,setOrder]=useState(initialOrder||"")
  const dispatch=useDispatch()
  let obj={
    params:{
      category:searchParams.getAll("category"),
      
    }
  }
  
  useEffect(()=>{
    dispatch(getproducts(obj,page))
  },[page])
const handleSort=(e)=>{
setOrder(e.target.value)

}
  return (
    <>
 <div className="wrapper">
 <Sidebar page={page}/>
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
                  <div className="childhover">Relevance</div>
                  <div className="childhover">Brands</div>
                  <div className="childhover">Name</div>
                  <div value={"asc"} onClick={handleSort} className="childhover">Price(Low to High)</div>
                  <div value={"desc"} onClick={handleSort} className="childhover">Price(High to Low)</div>
                  <div className="childhover">Top Rated</div>
                  <div className="childhover">Most Reviewed</div>
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
                  <Card maxW="sm" className="card">
                    <CardBody>
                      <Image
                        height="150px"
                        width="150px"
                        src={el.image}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Text size="md">{el.title}</Text>
                        <Text>{el.reviews}</Text>
                        <Text>{el.category}</Text>
                        <Text color="blue.600" fontSize="2xl">
                          {el.price}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter></CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
<Pagination page={page} setPage={setPage}/>
    </>
  )
 
  
 
  ;

};
