import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Flex,
    Box,
    Grid,
    GridItem,
    Heading,
    VStack,
    Image,
  } from '@chakra-ui/react'
  import {
    List,
    ListItem,
  } from '@chakra-ui/react'
  function Modal6() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"unstyled"} onClick={onOpen}>
            <Text fontWeight={"semibold"} fontSize="19px">Clothing</Text>
        </Button>
        <Box   >
        <Modal size={"6xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader fontSize={"28px"}>CLOTHING</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex font-family= "Bebas Neue,Arial,Charcoal,sans-serif" gap={"5vw"} width="100%">
                <Box width={"52vw"} borderRight={"1px solid lightgrey"}>
                    <Grid width={"45vw"}  gridTemplateColumns={"repeat(4,1fr)"} gap="4vw">
                        <GridItem>
                            <VStack  align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>MEN'S CLOTHING</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Jackets & Coats
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Shirts & Tops
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Pants & Shorts
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Rain Gear
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} color={"#21372a"} fontWeight={"semibold"} size={"sm"}>WOMEN's CLOTHING</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Jacket & Coats
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Shirts & Tops
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Hats & Tops
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Swimware
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>KID's CLOTHING</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Pants & Shots
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Clothing Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Sleepwear
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Hats & Tops
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>HUNTING CLOTHING</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Men's Hunting Clothes
                                    </ListItem>
                                    <ListItem cursor="pointer"  color="#666" fontSize="sm">
                                    Women's Hunting Clothes                                     </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Kid's hunting Clothes
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Clothing
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>BATTERY HEATED TECHNOLOGY</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Anchoring, Rope & Docking
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Rod Holders & Fishing Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Chargers & Portable Power
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>SUNGLASSES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Cameras
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Camera Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Water & Pool Toys
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>JEWELRY</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Feed/Attractants/Minerals
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Food Plot Seeds & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Game Feeders
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>WATCHES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Boat Seats
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Mounts & Pedestals
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Pontoon Furniture
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Grills, Tables & Umbrellas
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box width={"20vw"}>
                    <VStack spacing={5} align={"start"}>
                        <Image cursor="pointer" height={"40vh"} width="40vw" src='https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg' />
                        <Box>
                            <VStack align={"start"} spacing={"2vh"}>
                            <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color= "#8b0f0a" fontWeight={"medium"} size={"lg"}>Bargain Cave</Heading> 
                            <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color="#21372a"  fontWeight={"medium"} size={"lg"}>Outdoor Tips</Heading>

                            </VStack>
                        </Box>
                    </VStack>
                </Box>
              </Flex>
            </ModalBody>
  
          </ModalContent>
        </Modal>
        </Box>
        
      </>
    )
  }

  export default Modal6