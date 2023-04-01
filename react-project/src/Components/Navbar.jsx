import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import NavComp1 from "../HomePage/navComp1";
import NavComp2 from "../HomePage/navComp2";
import NavComp3 from "../HomePage/navComp3";

const Navbar = () => {
  return (
    <Box style={{ position: "fixed", width: "100vw", zIndex: "1100", backgroundColor: "white", top: "0" }}>
      <NavComp1 />
      <Divider colorScheme="gray.700" variant="solid" />
      <NavComp2 />
      <Divider colorScheme="gray.700" variant="solid" />
      <NavComp3 />
      <Divider colorScheme="gray.700" variant="solid" />
    </Box>
  );
};

export default Navbar;
