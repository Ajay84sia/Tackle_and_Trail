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
  function Modal2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"unstyled"} onClick={onOpen}>
            <Text fontWeight={"semibold"} fontSize="19px">Boating</Text>
        </Button>
        <Box   >
        <Modal size={"6xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader fontSize={"28px"}>BOATING</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex font-family= "Bebas Neue,Arial,Charcoal,sans-serif" gap={"5vw"} width="100%">
                <Box width={"52vw"} borderRight={"1px solid lightgrey"}>
                    <Grid width={"45vw"}  gridTemplateColumns={"repeat(4,1fr)"} gap="4vw">
                        <GridItem>
                            <VStack  align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>MARINE ELECTRONICS</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fish Finders & Chartplotters
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Sonar Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Marine Radios & Stereos
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Marine Mounts & Cases
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} color={"#21372a"} fontWeight={"semibold"} size={"sm"}>OUTBOARD MOTOR ACCESSORIES</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Props & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Oils & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fuel Tanks & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Gauges & Controls
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>TRAILER ACCESSORIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Guide-Ons, Brackets & Rollers
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Winches & Tie Downs
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Trailer Hitches
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Tires & Wheel Accessories
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>TROLLING MOTORS & ACCESSORIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Freshwater Trolling Motors
                                    </ListItem>
                                    <ListItem cursor="pointer"  color="#666" fontSize="sm">
                                        Saltwater Trolling Motors
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Trolling Motor Accessories
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>BOAT ACCESSORIES</Heading>
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
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>WATER SPORTS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Life Jackets
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Towables & Skis
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Water & Pool Toys
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>BOAT COVERS & BIMINS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Custom Fit Covers
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Universal Covers
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Bimini Tops
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Cover Accessories & Tie Downs
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>BOAT SEATS & FURNITURES</Heading>
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
                        <Image cursor="pointer" height={"40vh"} width="40vw" src='https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/08100657/07092017_Kayaking_01.jpg' />
                        <Box>
                            <VStack align={"start"} spacing={"2vh"}>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color= "#21372a" fontWeight={"medium"} size={"lg"}>Electronics Training</Heading>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color="#21372a"  fontWeight={"medium"} size={"lg"}>Boating Center</Heading>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color= "#8b0f0a" fontWeight={"medium"} size={"lg"}>Bargain Cave</Heading> 

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

  export default Modal2