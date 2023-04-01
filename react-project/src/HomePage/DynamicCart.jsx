import React from "react";
import { Icon, chakra } from "@chakra-ui/react";
import { useEffect } from "react";

const DynamicCart = () => {
  return (
    <div>
      <chakra.span pos="relative" display="inline-block">
        <Icon
          boxSize={8}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          cursor={"pointer"}
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </Icon>
        <chakra.span
          pos="absolute"
          top="-1px"
          right="-1px"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="red.100"
          transform="translate(50%,-50%)"
          bg="red.600"
          rounded="full"
        >
          50
        </chakra.span>
      </chakra.span>
    </div>
  );
};

export default DynamicCart;
