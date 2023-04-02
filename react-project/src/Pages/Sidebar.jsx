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
import { useSearchParams, useLocation } from "react-router-dom";
import { capitalize } from "@material-ui/core";
const Sidebar = ({ page, order, search, categories }) => {
  const location = useLocation();
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
  }, [category, order, title, search, location.search]);

  const handletitle = (e) => {
    let newtitle = [...title];

    const value = e.target.value;
    console.log(value);
    if (newtitle.includes(value)) {
      newtitle = newtitle.filter((el) => el !== value);
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
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }
    setcategory(newcategory);
  };

  return (
    <div style={{ height: "800px", width: "320px", marginTop: "40px" }}>
      <b style={{ fontSize: "22px" }}>FILTER BY</b>
      <Accordion allowMultiple style={{ marginTop: "20px" }}>
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{ fontSize: "22px" }}>Category</b>
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
                <b style={{ fontSize: "22px" }}>Brand</b>
              </Box>
              <AccordionIcon height="40px" width="45px" />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={"Garmin ECHOMAP Ultra 10 Chartplotter/Fish Finder Combo"}
              onChange={handletitle}
              checked={title.includes(
                "Garmin ECHOMAP Ultra 10 Chartplotter/Fish Finder Combo"
              )}
              defaultChecked={
                title ==
                "Garmin ECHOMAP Ultra 10 Chartplotter/Fish Finder Combo"
              }
              alignSelf="left"
            />
            <span>Garmin ECHOMAP Ultra</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={
                "Humminbird HELIX 7 CHIRP MEGA SI GPS G4 Fish Finder/Chartplotter "
              }
              onChange={handletitle}
              checked={title.includes(
                "Humminbird HELIX 7 CHIRP MEGA SI GPS G4 Fish Finder/Chartplotter "
              )}
              defaultChecked={
                title ==
                "Humminbird HELIX 7 CHIRP MEGA SI GPS G4 Fish Finder/Chartplotter "
              }
            />
            <span>Humminbird HELIX</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={"Lowrance HDS PRO 12 Fish Finder/Chartplotter"}
              onChange={handletitle}
              checked={title.includes(
                "Lowrance HDS PRO 12 Fish Finder/Chartplotter"
              )}
              defaultChecked={
                title == "Lowrance HDS PRO 12 Fish Finder/Chartplotter"
              }
            />
            <span>Lowrance HDS PRO</span>
            <br />
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              value={"Bass Pro Shops Deluxe Mesh Fishing Life Vest for Adults"}
              onChange={handletitle}
              checked={title.includes(
                "Bass Pro Shops Deluxe Mesh Fishing Life Vest for Adults"
              )}
              defaultChecked={
                title ==
                "Bass Pro Shops Deluxe Mesh Fishing Life Vest for Adults"
              }
            />
            <span>Fishing Life Vest</span>
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
                <b style={{ fontSize: "22px" }}>Price</b>
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
        <AccordionItem>
          <h2>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box as="span" flex="1" textAlign="left">
                <b style={{ fontSize: "22px" }}>Average Ratings</b>
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
            <span>⭐⭐⭐⭐⭐(5)</span>
            <br />
            <Checkbox height="20px" width="20px" textAlign="left" />
            <span>⭐⭐⭐⭐ (4)</span>
            <br />
            <Checkbox
              height="20px"
              width="20px"
              textAlign="left"
              alignSelf="left"
            />
            <span>⭐⭐⭐ (3)</span>
            <br />
            <Checkbox height="20px" width="20px" textAlign="left" />
            <span>⭐⭐ (2)</span>
            <br />
            <Checkbox height="20px" width="20px" textAlign="left" />
            <span>⭐ (1)</span>
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
                <b style={{ fontSize: "22px" }}>Type</b>
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

        <hr />
        <AccordionItem>
          <h1>
            <AccordionButton
              height="60px"
              width="300px"
              backgroundColor="white"
            >
              <Box flex="1" textAlign="left">
                <b style={{ fontSize: "22px" }}>Availability</b>
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

        <br />
      </Accordion>
    </div>
  );
};

export default Sidebar;
