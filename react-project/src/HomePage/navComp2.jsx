import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import logo from "./logo.png";
import logo1 from "./logo1.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import DynamicCart from "./DynamicCart";
import { useAuth0 } from "@auth0/auth0-react";
import { Product } from "../Pages/Product";

function NavComp2() {
  const [searchParams, setsearchParams] = useSearchParams();
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();
  const [search, setSearch] = useState("");
  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        h="15vh"
        onSubmit={handleSubmit}
      >
        <Box p="2" ml="2vw">
          <NavLink to="/">
            <Avatar
              height="12vh"
              width="10vw"
              src={logo}
              cursor="pointer"
              border="2px solid grey"
            />
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
              value={search}
              variant={"filled"}
              height={"45px"}
              width={"55vw"}
              type="tel"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
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
                <VStack>
                  <Avatar name="avatar" src={user.picture} />
                  <Button
                    variant="ghost"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </Button>
                </VStack>
              )}
            </Box>
            <Box>
              <NavLink to="/cart">
                <DynamicCart />
              </NavLink>
            </Box>
          </HStack>
        </Box>
      </Flex>
      {/* <Product search={search}/> */}
    </>
  );
}

export default NavComp2;
