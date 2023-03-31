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
import { useSearchParams } from "react-router-dom";
import {Link as NavLink} from "react-router-dom"
import { useEffect, useState } from "react";
import { Product } from "../Pages/Product";
import NavComp3 from "./navComp3";
import { Divider } from "@chakra-ui/react";
import Sidebar from "../Pages/Sidebar";
import DynamicCart from "../Admin/DynamicCart";
import { useAuth0 } from "@auth0/auth0-react";

function NavComp2(){
    const[searchParams,setsearchParams]=useSearchParams()
    const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();
    const[search,setSearch]=useState("")
  console.log(search)

  const handleSubmit=(e)=>{
e.preventDefault()
  }
    return(
        <>
 <Flex minWidth='max-content' alignItems='center' gap='2' h="15vh" onSubmit={handleSubmit}>
            <Box p='2' ml="2vw">
                     <NavLink to="/"> 
                        <Avatar 
                        height="12vh"
                        width="10vw"
                        src={logo}
                        cursor="pointer"
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
            <Input  value={search} variant={"filled"} height={"45px"} width={"55vw"}  type="tel" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
          </InputGroup>
        </HStack>
        <Spacer />
        <Box  width={"20vw"}>
            <HStack ml={"3vw"} gap={6} justifyContent={"center"} align={"center"}>
                <Box _hover={{fontWeight:"semibold"}} >
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
                <Box >
                    <DynamicCart   />
                </Box>
            </HStack>
        </Box>
        </Flex>
        <NavComp3 />
      <Divider colorScheme="gray.700" variant="solid" />
      <Product search={search}/>
        </>
       
    )
}

export default NavComp2;
