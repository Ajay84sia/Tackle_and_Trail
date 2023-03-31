import {Box, Flex, HStack, Spacer, VStack ,Text} from "@chakra-ui/react"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { fontSize } from "@mui/system";
function NavComp1(){
    return(
        <Flex h="7vh" textAlign="center">
            <Box textAlign={"center"} ml={"2vw"} width={"35vw"} >
                <HStack gap={"2vw"}>
                    <HStack>
                        <LocationOnOutlinedIcon sx={{pt:"10px" , fontSize:"40px"}} />
                        <Text fontWeight={"medium"} fontSize={"17px"} pt={"10px"}>My Store:</Text>
                        <Text fontSize={"17px"} pt={"10px"} fontWeight={"semibold"} color={"blue"}>Find A Store</Text>
                    </HStack>
                    <HStack>
                        <Text fontSize={"17px"} pt={"10px"} fontWeight={"medium"} color={"#CC5500"} >FREE</Text>
                        <Text fontWeight={"semibold"} fontSize={"17px"} pt={"10px"} >Shipping On Orders $50+</Text>
                    </HStack>
                </HStack>
            </Box>
            <Spacer />
            <Box width={"52vw"} >
                <Flex mr={"1vw"} pt={"10px"} gap={"2vw"}>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Boats</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Off Road</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Resorts & Restaurants</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Outdoor Tips</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>CLUB</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Gift Cards</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}>Help</Text>
                    <Text fontSize={"16px"} cursor={"pointer"} _hover={{textDecoration:"underline"}}> Canada</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NavComp1