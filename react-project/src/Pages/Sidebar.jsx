import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
const Sidebar = () => {
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
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
              border="2px solid grey"
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
              border="1px solid black"
              alignSelf="left"
            />
            <span>In Stock</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              border="1px solid black"
            />
            <span>Limited Stock</span>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
