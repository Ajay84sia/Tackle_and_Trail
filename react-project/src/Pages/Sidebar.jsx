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
import { capitalize } from "@material-ui/core";
const Sidebar = ({ page, order, search, categories }) => {
  const [searchParams, setsearchParams] = useSearchParams();
  const initialcategory = searchParams.getAll("category");
  const [category, setcategory] = useState(initialcategory || []);
  const initialTitle = searchParams.getAll("title");
  const [title, setTitle] = useState(initialTitle || []);
  const { products } = useSelector((store) => store.productReducer);

  console.log(categories);

  useEffect(() => {
    let params = {
      category,
      title,
    };
    search && (params.q = search);
    order && (params.order = order);
    setsearchParams(params);
  }, [category, order, title, search]);

  const handletitle = (e) => {
    let newtitle = [...title];

    const value = e.target.value;
    console.log(value);
    if (newtitle.includes(value)) {
      newtitle.splice(newtitle.indexOf(value), 1);
    } else {
      newtitle.push(value);
    }
    setTitle(newtitle);
  };
  console.log(title);
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
    <div style={{ height: "800px", width: "320px",marginTop:"40px"}}>
      <b style={{fontSize:"22px"}}>FILTER BY</b>
      <Accordion allowMultiple style={{marginTop:"20px"}}>
      
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Category</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            {categories &&
              categories.map((el, i) => {
                return (
                  <>
                    <Checkbox
                    key={i}
                      height="20px"
                      width="20px"
                      textAlign="left"
                      alignSelf="left"
                      value={el}
                      onChange={handleChange}
                      checked={category.includes(el)}
                      defaultChecked={category == el}
                    />
                    <span style={{ textTransform: "capitalize" }}>{el}</span>
                    <br />
                  </>
                );
              })}
          </AccordionPanel>
        </AccordionItem>

 
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Brand</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={"Bass Pro Shops Stainless Steel Bowl"}
              onChange={handletitle}
              checked={title.includes("Bass Pro Shops Stainless Steel Bowl")}
              defaultChecked={title == "Bass Pro Shops Stainless Steel Bowl"}
              alignSelf="left"
            />
            <span>Bass Pro</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={'Masterbuilt 30" Electric Smoker Covert'}
              onChange={handletitle}
              checked={title.includes('Masterbuilt 30" Electric Smoker Cover')}
              defaultChecked={title == 'Masterbuilt 30" Electric Smoker Cover'}
            />
            <span>Masterbuilt</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={
                "Champion Power Equipment 3550W Weekender Portable Generator"
              }
              onChange={handletitle}
              checked={title.includes(
                "Champion Power Equipment 3550W Weekender Portable Generator"
              )}
              defaultChecked={
                title ==
                "Champion Power Equipment 3550W Weekender Portable Generator"
              }
            />
            <span>Champion</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={"GSI Outdoors Enamelware Espresso Cup"}
              onChange={handletitle}
              checked={title.includes("GSI Outdoors Enamelware Espresso Cup")}
              defaultChecked={title == "GSI Outdoors Enamelware Espresso Cup"}
            />
            <span>GS</span>
            <br />
            <br />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
              
            >
               <Box as="span" flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Type</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
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
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Price</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
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
            <Checkbox height="20px" width="20px" textAlign="left" />
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
          <h1>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
          
              <Box  flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Availability</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
            </AccordionButton>
          </h1>
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
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{fontSize:"22px"}}>Average Ratings</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
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
        <br/>

      </Accordion>
    </div>
  );
};

export default Sidebar;
