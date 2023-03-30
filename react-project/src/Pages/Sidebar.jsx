import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const Sidebar = ({ page, order }) => {
  const [searchParams, setsearchParams] = useSearchParams();
  const initialcategory = searchParams.getAll("category");
  const [category, setcategory] = useState(initialcategory || []);
  const { products } = useSelector((store) => store.productReducer);

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setsearchParams(params);
  }, [category, order]);

  const handleChange = (e) => {
    let newcategory = [...category];
    const value = e.target.value;
    console.log(value);
    if (newcategory.includes(value)) {
      newcategory.splice(newcategory.indexOf(value), 1);
    } else {
      newcategory.push(value);
    }
    setcategory(newcategory);
  };

  return (
    <div style={{ height: "800px", width: "320px" }}>
      <h1>FILTER BY</h1>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton
              height="50px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <h3>Availability</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox height="20px" width="20px" textAlign="left" />
            <span>Limited Stock</span>
          </AccordionPanel>
        </AccordionItem>
        <hr />
        <AccordionItem>
          <h2>
            <AccordionButton
              height="40px"
              width="300px"
              backgroundColor="white"
              
            >
              <Box as="span" flex="1" textAlign="left">
                <h3>Category</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
           
              alignSelf="left"
              value={"tents"}
              onChange={handleChange}
              checked={category.includes("tents")}
              defaultChecked={category == "tents"}
            />
            <span>Tents</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
           
              value={"Kitchen"}
              onChange={handleChange}
              checked={category.includes("Kitchen")}
            />
            <span>Kitchen</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
            
              checked={category.includes("Lighting")}
              value={"Lighting"}
              onChange={handleChange}
            />
            <span>lighting</span>
            <br/>
            <br/>
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
           
              alignSelf="left"
              value={"camp essentials"}
              onChange={handleChange}
              checked={category.includes("camp essentials")}
              defaultChecked={category == "camp essentials"}
            />
            <span>Camp-Essentials</span>
          </AccordionPanel>
        </AccordionItem>

        <hr />
        <AccordionItem>
          <h2>
            <AccordionButton
              height="40px"
              width="300px"
              backgroundColor="white"
              
            >
               <Box as="span" flex="1" textAlign="left">
                <h3>Type</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
            
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
             
            />
            <span>Limited Stock</span>
          </AccordionPanel>
        </AccordionItem>
        <hr />
        <AccordionItem>
          <h2>
            <AccordionButton
              height="40px"
              width="300px"
              backgroundColor="white"
            
            >
              <Box as="span" flex="1" textAlign="left">
                <h3>Brand</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
             
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
           
            />
            <span>Limited Stock</span>
          </AccordionPanel>
        </AccordionItem>
        <hr />
        <AccordionItem>
          <h2>
            <AccordionButton
              height="40px"
              width="300px"
              backgroundColor="white"
             
            >
              <Box as="span" flex="1" textAlign="left">
                <h3>Price</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
            
              alignSelf="left"
            />
            <span>Price:0-100</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
             
            />
            <span>Price:100-200</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
            
              alignSelf="left"
            />
            <span>Price:200-250</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
          
              alignSelf="left"
            />
            <span>Price:250-300</span>
            <br />
            <br />
            <span>Price:300-above</span>
          </AccordionPanel>
        </AccordionItem>
        <hr />
        <AccordionItem>
          <h2>
            <AccordionButton
              height="40px"
              width="300px"
              backgroundColor="white"
              
            >
              <Box as="span" flex="1" textAlign="left">
                <h3>Average Ratings</h3>
              </Box>
              <AccordionIcon height="30px" width="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
            
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
             
            />
            <span>Limited Stock</span>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
