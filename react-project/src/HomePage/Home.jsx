import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import { ProductSlider } from "./ProductSlider"

function Home(){
    return(
        <>
            <Box
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                h="100%"
                w="100%"
                mt={"4vh"}
                cursor="pointer"
                border={"1px solid black"}
            >
                <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1677857264/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/BPS_Homepage_SFC_v2.png" /> 
            </Box>
            <Box mt="5vh"  cursor="pointer">
                <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1675793769/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/CLUB-Homepage_Banner.png" h="30vh"
                w="100%" />
                <Button bgColor={"white"} color="black" size={"md"} pos="relative" bottom={"7vh"} right="5px">SHOP NOW</Button>
            </Box>
            <Flex height={"65vh"} width={"100%"} mt={"1vh"}>
                <Box
                h="100%"
                w="100%"
                width={"49vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_tradein.png" />
                    <VStack spacing={4} color={"white"} pos={"relative"} bottom="50vh">
                    <Text fontWeight={"bold"} fontSize={"lg"}>--SPRING--</Text>
                        <Heading fontWeight={"bold"} size={"lg"}>ROD AND REEL</Heading>
                        <Heading fontWeight={"bold"} size={"lg"}>TREAD-IN</Heading>
                        <Text fontSize={"lg"}>SAVE UPTO $100 | IN-STORE ONLY</Text>
                        <Button pos={"relative"} top="1vh" bgColor={"white"} color="black" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
                <Spacer />
                <Box
                h="100%"
                w="100%"
                width={"49vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_rodreels_bps.png" />
                    <VStack color={"white"} pos={"relative"} bottom="35vh">
                        <Heading fontWeight={"bold"} size={"lg"}>JOHNNY MORRIS</Heading>
                        <Heading fontWeight={"bold"} size={"lg"}>RODS & REELS</Heading>
                        <Button bgColor={"white"} color="black" pos={"relative"} top="3vh" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
            </Flex>
            <Flex height={"45vh"} width={"100%"} mt={"1vh"}>
                <Box
                h="100%"
                w="100%"
                width={"50vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-left.png" />
                </Box>
                <Spacer />
                <Box
                h="100%"
                w="100%"
                width={"50vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-right.png" />
                </Box>
            </Flex>
            <Box mt={"3vh"}  width={"100%"} height="83vh">
            <Text fontSize={"3xl"} fontWeight="bold">HOT THIS WEEK</Text>
                <ProductSlider />
            </Box>
            <Box mt={"3vh"} width={"100%"} height="55vh">
                <Text fontSize={"3xl"} fontWeight="bold">SHOP BY CATEGORIES</Text>
                <Grid mt={"4vh"} gridTemplateColumns={"repeat(5,1fr)"} gap="10px">
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-marine.png" />
                            <Text fontSize={"lg"} fontWeight="semibold"> MARINE ELECTRONICS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-reel.png" />
                            <Text fontSize={"lg"} fontWeight="semibold">FISHING REELS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-trolling-motor.png" />
                            <Text fontSize={"lg"} fontWeight="semibold"> TROLLING MOTORS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-jigs.png" />
                            <Text fontSize={"lg"} fontWeight="semibold"> JIGS</Text>
                        </VStack>
                    </GridItem>
                    <GridItem cursor="pointer">
                        <VStack>
                            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1677080754/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-fishing-clothing.png" />
                            <Text fontSize={"lg"} fontWeight="semibold">FISHING CLOTHING</Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>

            <Box textAlign={"center"} margin="4vh auto" width={"98%"} height="12vh" bgColor={"#081F3F"}>
                <HStack pt={"3vh"} pl={"30vw"} align={"center"}>
                        <Heading  color={"white"} fontWeight={"semibold"} size={"xl"}>MILITARY APPRECIATION</Heading>
                        <Heading  color={"yellow"} fontWeight={"semibold"} size={"xl"}>DISCOUNT</Heading>
                        <Button bgColor={"white"} color="black" pos={"relative"} left="3vw" size={"lg"}>LEARN MORE</Button>
                </HStack>
            </Box>
            <Flex height={"65vh"} width={"98%"} margin="auto" mt={"5vh"}>
                <Box
                h="100%"
                w="100%"
                width={"48vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1678488592/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/CLUB_CEP_homepage_sub.png" />
                    <VStack spacing={1} color={"white"} align="start" pos={"relative"} left="2vw" bottom="40vh">
                        <Heading fontWeight={"bold"} size={"lg"}>EXCLUSIVE</Heading>
                        <Heading fontWeight={"bold"} size={"lg"} color="#EFB628">CLUB MEMBER</Heading>
                        <Heading fontWeight={"bold"} size={"lg"} color="#EFB628">SAVINGS</Heading>
                        <Button pos={"relative"} top="5vh" bgColor={"white"} color="black" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
                <Spacer />
                <Box
                h="100%"
                w="100%"
                width={"48vw"}
                cursor="pointer"
                >
                    <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_cclothing.png" />
                    <VStack spacing={1} color={"white"} align="start" pos={"relative"} pl="2vw" bottom="45vh">
                        <Text fontSize={"lg"} fontWeight="thin">LIMITED TIME ONLY</Text>
                        <Heading fontWeight={"bold"} size={"lg"}>CLOTHING</Heading>
                        <Heading fontWeight={"bold"} size={"lg"}>CLEARANCE SALE</Heading>
                        <Text fontSize={"lg"} fontWeight="thin">WE TOOK AN ADDITIONAL</Text>
                        <Text fontSize={"lg"} fontWeight="thin">25% OFF SELECT ITEMS!</Text>
                        <Button bgColor={"white"} color="black" pos={"relative"} top="3vh" size={"lg"}>SHOP NOW</Button>
                    </VStack>
                </Box>
            </Flex>

            <Box mt={"3vh"} ml="2vw" width={"98%"} height="25vh">
                <Text fontSize={"3xl"} fontWeight="bold">OUR TOP BRANDS</Text>
                <Grid mt={"4vh"} gridTemplateColumns={"repeat(8,1fr)"} gap="8px">
                    <GridItem cursor="pointer">
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-bps.jpg" />
                    </GridItem>
                    <GridItem cursor="pointer">
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-cabelas.jpg" />
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-redhead.jpg" />
                            
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-abu.jpg" />
                            
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-garmin.jpg" />
                            
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-nr.jpg" />
                            
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-minn.jpg" />
                            
                    </GridItem>
                    <GridItem cursor="pointer">
                        
                            <Image maxH={"100px"} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-ascend.jpg" />
                            
                    </GridItem>
                </Grid>
            </Box>
            <Box
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                h="45vh"
                w="100%"
                mt={"4vh"}
                cursor="pointer"
            >
                <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1678985756/DigitalCreative/2023/Campaigns/Wk10_3-16/Homepage/BTS-Homepage-Desktop.png" /> 
                <Button bgColor={"white"} color="black" pos={"relative"} bottom="11vh" size={"lg"}>SHOP NOW</Button>
            </Box>
        </>
    )
}

export default Home