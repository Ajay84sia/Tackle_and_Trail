import {
  Avatar,
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import logo from "./logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link as NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function NavComp2() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" h="15vh">
      <Box p="2" ml="2vw">
        <NavLink to="/">
          <Avatar height="12vh" width="10vw" src={logo} cursor="pointer" />
        </NavLink>
      </Box>
      <Spacer />
      <HStack spacing={3} width={"50vw"} alignItems="center">
        <InputGroup
          display={{
            base: "none",
            lg: "block",
          }}
          // ml="auto"
          mr="8vw"
          // bgColor={"gray.100"}
          borderRadius={"full"}
        >
          <InputLeftElement pt={"6px"} pointerEvents="none">
            <SearchOutlinedIcon />
          </InputLeftElement>
          <Input
            variant={"filled"}
            height={"45px"}
            width={"55vw"}
            type="tel"
            placeholder="Search..."
          />
        </InputGroup>
      </HStack>
      <Spacer />
      <Box width={"20vw"}>
        <HStack ml={"3vw"} gap={6} justifyContent={"center"} align={"center"}>
          <Box _hover={{ fontWeight: "semibold" }}>
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect()}>
                <HiOutlineUserCircle fontSize={"40px"} />
              </button>
            )}

            {isAuthenticated && (
              <>
                <Avatar name="avatar" src={user.picture} />
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </>
            )}
          </Box>
          <Box>
            <GiShoppingCart fontSize={"40px"} />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default NavComp2;
