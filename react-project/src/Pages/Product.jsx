import axios from "axios";
import "./product.css";
import { useState } from "react";
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
import { Pagination } from "./Pagination";
// import {Pagination} from "./Pagination"
// import Pagination from "./pagination";
import { AccordionIcon } from "@chakra-ui/react";
import { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Product = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  const temp = async () => {
    let res = await axios.get("https://tackle-and-trail.onrender.com/camping");
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    temp();
  }, []);
console.log(product)
  return (
    <>
      <div className="wrapper">
        <Sidebar />
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
              <span>{data.length} Results</span>
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
                <MenuList className="childmenu" zIndex={15}>
                  <div className="childhover">Relevance</div>
                  <div className="childhover">Brands</div>
                  <div className="childhover">Name</div>
                  <div className="childhover">Price(Low to High)</div>
                  <div className="childhover">Price(High to Low)</div>
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
            {product.map((el) => {
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
      <Pagination setProducts={setProduct} fulllength={data}

/>
    </>
  );
};
