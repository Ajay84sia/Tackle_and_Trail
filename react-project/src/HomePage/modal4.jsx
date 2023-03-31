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
  function Modal4() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"unstyled"} onClick={onOpen}>
            <Text fontWeight={"semibold"} fontSize="19px">Hunting</Text>
        </Button>
        <Box   >
        <Modal size={"6xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader fontSize={"28px"}>HUNTING</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex font-family= "Bebas Neue,Arial,Charcoal,sans-serif" gap={"5vw"} width="100%">
                <Box width={"52vw"} borderRight={"1px solid lightgrey"}>
                    <Grid width={"45vw"}  gridTemplateColumns={"repeat(4,1fr)"} gap="4vw">
                        <GridItem>
                            <VStack  align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>ARCHERY</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Bows
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Arrows & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Broadheads & Field Points
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Crossbows and Accessories
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} color={"#21372a"} fontWeight={"semibold"} size={"sm"}>OPTICS & SCOPES</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Binoculars
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Scopes
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Rangefinders
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Spotting Scopes
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>HUNTING ACCESSORIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    2 Way Radios And GPS
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Ground Blinds
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Scent Elimination
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Scents
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>TREE STAND</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Ladder Stands
                                    </ListItem>
                                    <ListItem cursor="pointer"  color="#666" fontSize="sm">
                                    Fixed Position Stands
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Climbing Stands
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Box Blinds/Tripods
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
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>GAME AND TRAIL CAMERAS</Heading>
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
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>FOOD PLOTS & FEEDING</Heading>
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
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>GAME CALLS</Heading>
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
                        <Image cursor="pointer" height={"40vh"} width="40vw" src='https://media.istockphoto.com/id/1301911854/photo/hunter-and-his-dog-with-prey-at-sunset.jpg?s=612x612&w=0&k=20&c=5_zZjvKrnovP4bQIu0fSRyfs9nVUgsdICIRvF9ReHTg=' />
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

  export default Modal4