import React from "react";
import styled from "styled-components";
import { StarIcon } from "@chakra-ui/icons";
import { Flex , Box, Text} from "@chakra-ui/react";

function StarFunc({ rating }) {
  const maxRating = 5;

  return (
    <Flex align="center">
      {[...Array(maxRating)].map((_, index) => {
        const isFilled = index < Math.floor(rating);

        return (
          <Box key={index} color={isFilled ? "grey" : "gray.300"} mr={1}>
            <StarIcon style={{ height: "10px", width: "10px" }} />
          </Box>
        );
      })}
    </Flex>
  );
}

const Star = ({ stars, reviews }) => {


  return (
    <Wrapper>
      <div className="icon-style">
        <StarFunc rating={stars} />
        &nbsp;
        <p>{`${stars} (${reviews})`}</p>
      </div>
    </Wrapper>
  )
};

export default Star;
const Wrapper = styled.section`
   display: flex;
   flex-direction: row;
   .icon-style{
    display: flex;
    flex-direction: row;
    align-items: center;
   }
   .icon{
    margin-top: 10px;
    gap: 10px;
   }
`