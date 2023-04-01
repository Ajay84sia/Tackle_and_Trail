import React, { useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";
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
import { SearchContext } from "../Contextapi/SearchContext";
import { purple } from "@material-ui/core/colors";

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




export const Product = ({endpoint}) => {
  const{search}=useContext(SearchContext)
  const [searchParams,setsearchParams] = useSearchParams();
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
console.log(search)
  const handleSort = (event) => {
    const sortType = event.target.dataset.sort;
    const orderdata= event.target.dataset.value1
 
    if (sort === sortType) {
      setOrder(orderdata);
    } else {
      setSort(sortType);
      setOrder("");
    }
  };
  console.log(order)

useEffect(()=>{
  const timeoutId = setTimeout(()=>{
    console.log("hv")
   setsearchParams({q:search})
  },500)
  return ()=>clearTimeout(timeoutId)
},[search])

  useEffect(() => {
    dispatch(getproducts(endpoint,obj, page));
  }, [,page, location.search]);

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
        <Sidebar page={page} order={order} search={search} style={{marginTop:"80px"}} className="sidebar"/>
        <div className="carddata"
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

            <div style={{ textAlign: "right" }} >
              <Menu className="menu">
                <MenuButton
                  className="menu"
                  as={Button}
                 
                  rightIcon={<ChevronDownIcon />}
                  style={{height: "70px", width: "200px",fontSize:"23px" }}
                >
                  Sort By:Brand
                </MenuButton>
                <MenuList className="childmenu" zIndex={15} onKeyDown style={{border:"2px solid black"}}>
                  <div
                    className="childhover"
                    data-sort="relevance"
                    onClick={handleSort}
                    
                  >
                   <b> Relevance</b>
                  </div>
                  <div
                    className="childhover"
                    data-sort="brands"
                    onClick={handleSort}
                   
                  >
                   <b>
                   Brands
                   </b>
                  </div>
                  <div
                    className="childhover"
                    data-sort="name"
                    onClick={handleSort}
                   
                  >
                   <b>Name</b> 
                  </div>
                  <div
                    className="childhover"
                    data-sort="price"
                    onClick={handleSort}
                    data-value1="asc"
                   
                  >
                    <b>Price(Low to High)</b>
                  </div>
                  <div
                    className="childhover"
                    data-sort="price"
                    onClick={handleSort}
                    data-value1="desc"
                  
                    
                  >
                   <b>Price(High to Low)</b> 
                  </div>
                  <div
                    className="childhover"
                    data-sort="rating"
                    data-value1="desc"
                    onClick={handleSort}
                   
                  >
                   <b>Top Rated</b> 
                  </div>
                  <div
                    className="childhover"
                    data-sort="reviews"
                    data-value1="desc"
                    onClick={handleSort}
                   
                   
                  >
                   <b> Most Reviewed</b>
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
                <Link to={`/${endpoint}/${el.id}`}>

                <Center py={4}>
        <Box
        height="auto"
          role={'group'}
          p={8}
        
          minW={"330px"}
          maxW={'330px'}
          w={'full'}
        
        //   boxShadow={'2xl'}
        //   rounded={'lg'}
          pos={'relative'}
          _hover={{boxShadow:'2xl'}}
          cursor="pointer"
        
          zIndex={1}>
            
          <Box
            rounded={'lg'}
            // mt={-12}
            pos={'relative'}
            height="auto"
         
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={300}
              width={282}
              objectFit={'cover'}
              src={el.image}
              
            />
          </Box>
          <Stack pt={10} align={'left'} >
            <Text color={"black"} textTransform={'uppercase'} fontSize={'lg'} fontWeight="semibold" fontFamily={'body'} align={'left'}>
            {el.title}
            </Text>
            <Stack spacing={0} direction={'column'} align={'left'}>
            <Text fontSize={'md'} fontWeight="semibold" color={"black"} align={'left'}>
                    ({el.reviews})
              </Text>
                <Text fontSize={'md'} fontWeight="semibold" align={'left'}>
                  {el.category}
                </Text>
              <Text fontSize="22px" fontWeight="semibold" color={'black'} align={'left'}>
                   ${el.price}
              </Text>
              <Text fontSize={'md'} fontWeight="semibold" color={'gray.600'} align={'left'}>
                   {el.offer}
              </Text>
              <StarFunc rating={el.rating}/>
            </Stack>
          </Stack>
        </Box>
      </Center>
   
                  </Link>
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

