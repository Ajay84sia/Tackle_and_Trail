import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1
          ? ( <FaStar className="icon" />)
          : stars >= number
          ?( <FaStarHalfAlt className="icon"/> )
          : (<AiOutlineStar className="icon"/> 
          )}
      </span>
    );
  });
  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p>{3.9}({156}) Write Review</p>
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