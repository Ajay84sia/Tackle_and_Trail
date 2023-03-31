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
  function Modal1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"unstyled"} onClick={onOpen}>
            <Text fontWeight={"semibold"} fontSize="19px">Fishing</Text>
        </Button>
        <Box   >
        <Modal size={"6xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader fontSize={"28px"}>FISHING</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex font-family= "Bebas Neue,Arial,Charcoal,sans-serif" gap={"5vw"} width="100%">
                <Box width={"52vw"} borderRight={"1px solid lightgrey"}>
                    <Grid width={"45vw"}  gridTemplateColumns={"repeat(4,1fr)"} gap="4vw">
                        <GridItem>
                            <VStack  align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>FISHING REELS</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        BaitCast Reels
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Spinning Reels
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Reels
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fly Reels
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} color={"#21372a"} fontWeight={"semibold"} size={"sm"}>FISHING RODS</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Casting Rods
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Spinning Rods
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Rods
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fly Rods
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>ROD COMBOS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        BaitCast Combos
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Spinning Combos
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Combos
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fly Combos
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>LURES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Hardbait Lures
                                    </ListItem>
                                    <ListItem cursor="pointer"  color="#666" fontSize="sm">
                                        Softbait Lures
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Spinnerbaits & Buzzlebaits
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fly Reels
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>FISHING LINE, HOOKS & WEIGHTS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fishing Line
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fish Hooks
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Weights & Sinkers
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Fly Hooks
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>FISHING ACCESSORIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Tools & Pliers
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        FIlet & Knives
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Rod Holders & Racks
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Rod & Reel Accessories
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>TACKLE BOXES & BAGS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Tackle Boxes
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Tackle Bags
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Utility Boxes
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>SALTWATER FISHING</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Reels
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Rods
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Lures
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                        Saltwater Combos
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box width={"20vw"}>
                    <VStack spacing={5} align={"start"}>
                        <Image cursor="pointer" height={"40vh"} width="40vw" src='https://images.unsplash.com/photo-1529230117010-b6c436154f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80' />
                        <Box>
                            <VStack spacing={"2vh"}>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color= "#21372a" fontWeight={"medium"} size={"lg"}>Shop The Rig</Heading>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}}  color= "#8b0f0a" fontWeight={"medium"} size={"lg"}>Bargain Cave</Heading>
                                <Heading cursor="pointer" _hover={{textDecoration:"underline"}} color="#21372a" fontWeight={"medium"} size={"lg"}>Outdoor Tips</Heading> 

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

  export default Modal1