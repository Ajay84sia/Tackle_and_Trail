import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getproducts } from "../Redux/productReducer/action";
import { Pagination } from "./Pagination";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./product.css";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { AccordionIcon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Product = ({ endpoint }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { products } = useSelector((store) => store.productReducer);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("");
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const dispatch = useDispatch();
  // const endpoint = "camping"
  const obj = {
    params: {
      category: searchParams.getAll("category"),
      title: searchParams.getAll("title"),
      _sort: searchParams.get("order") && "price",
      // _sort:searchParams.get("order")&&("reviews"),
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getproducts(endpoint, obj, page));
  }, [page, location.search]);

  const handleSort = (event) => {
    const sortingOption = event.target.dataset.sort;
    // do something with the selected sorting option

    setOrder(sortingOption);
  };
  console.log(order);
  console.log(sorting);
  return (
    <>
      <div className="wrapper">
        <Sidebar page={page} order={order} />
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
                  <div className="childhover" onClick={handleSort}>
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
      <Pagination page={page} setPage={setPage} />
    </>
  );
};
