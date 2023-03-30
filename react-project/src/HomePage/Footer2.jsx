import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, HStack, Input, List, ListItem, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {FcIphone} from "react-icons/fc";
import {FcBookmark} from "react-icons/fc";
import {FcSms} from "react-icons/fc";

const Footer2 = () => {
  return (
    <Flex mt={"2vh"} width={"100%"} borderBottom="1px solid lightgrey">
        <Box pl={"4vw"} width={"53vw"}>
        <Grid  gridTemplateColumns={"repeat(3,1fr)"} width="45vw"  gap={"4vw"}>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"#21372a"} fontWeight={"semibold"} size={"md"}>
                    HELP
                </Heading>
                <List spacing={3} pt="3vh" >
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} >Order Status</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Return</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Shipping Information</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Product Subscription</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Size Chart</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Embroidery Services</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Rod & Reel Repair</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Boat & Boat Centers</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Tracker Off-Road</ListItem>
                </List>
            </VStack>
            </GridItem>
            
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"#21372a"} fontWeight={"semibold"} size={"md"}>
                    RESOURCES
                </Heading>
                <List spacing={3} pt="3vh">
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Order Status</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Return</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Shipping Information</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Product Subscription</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Size Chart</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Embroidery Services</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Rod & Reel Repair</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Boat & Boat Centers</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Tracker Off-Road</ListItem>
                </List>
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"#21372a"} fontWeight={"semibold"} size={"md"}>
                    ABOUT US
                </Heading>
                <List spacing={3} pt="3vh">
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Order Status</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Return</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Shipping Information</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Product Subscription</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Size Chart</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Embroidery Services</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Rod & Reel Repair</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Boat & Boat Centers</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}}>Tracker Off-Road</ListItem>
                </List>
            </VStack>
            </GridItem>
        </Grid>
        </Box>
        

        <Box width={"45vw"}>
            <VStack spacing={"3vh"}  width={"45vw"} height="40vh" align={"start"} borderBottom="1px solid lightgrey">
                <Heading color={"#21372a"} fontWeight={"semibold"} size={"md"}>
                    SIGN UP FOR EXCLUSIVE DEALS & OFFERS
                </Heading>
                <VStack align={"start"}>
                    <Input pb={"1vh"} color="gray" fontWeight={"medium"} bgColor={"white"} width="20vw" height={"7vh"} placeholder="Enter Your Email Address" />
                    <Text fontSize={"md"} fontWeight={"semibold"}>You can unsubscribe at any time.</Text>
                </VStack>
                <Checkbox colorScheme="blackAlpha" >
                    <Text fontSize={"md"}>
                        I agree to receive special offers, promotions, and catalog announcements
                    </Text>
                </Checkbox>
                <Button height={"7vh"} bgColor={"#234832"} _hover={{bgColor:"#1d5534"}} color="white">SIGN UP</Button>
            </VStack>
            <VStack align={"start"} spacing={"5vh"} mt="6vh">
                <HStack>
                    <FcSms cursor={"pointer"} fontSize={"40px"} />
                    <Text fontSize={"md"} cursor={"pointer"} _hover={{textDecoration:"underline"}} textAlign={"center"}>Sign Up for SMS Messaging</Text>
                </HStack>
                <HStack>
                    <FcBookmark cursor={"pointer"} fontSize={"40px"} />
                    <Text fontSize={"md"} cursor={"pointer"} _hover={{textDecoration:"underline"}} textAlign={"center"}> Get Our Free Catalog</Text>
                </HStack>
                <HStack>
                    <FcIphone cursor={"pointer"} fontSize={"40px"} />
                    <Text fontSize={"md"} cursor={"pointer"} _hover={{textDecoration:"underline"}} textAlign={"center"}> Download Our Mobile App</Text>
                </HStack>
            </VStack>
        </Box>
    </Flex>
  )
}

export default Footer2