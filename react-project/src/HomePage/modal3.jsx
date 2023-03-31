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
  function Modal3() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"unstyled"} onClick={onOpen}>
            <Text fontWeight={"semibold"} fontSize="19px">Shooting</Text>
        </Button>
        <Box   >
        <Modal size={"6xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader fontSize={"28px"}>SHOOTING</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex font-family= "Bebas Neue,Arial,Charcoal,sans-serif" gap={"5vw"} width="100%">
                <Box width={"52vw"} borderRight={"1px solid lightgrey"}>
                    <Grid width={"45vw"}  gridTemplateColumns={"repeat(4,1fr)"} gap="4vw">
                        <GridItem>
                            <VStack  align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>GUNS</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Centerfire Pistol
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Centerfire Rifles
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Rimfire Rifle
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Shotguns
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} color={"#21372a"} fontWeight={"semibold"} size={"sm"}>SHOOTING ACCESSORIES</Heading>
                                <List  spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Eye & Ear Protection
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Holsters
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Sticks/Bipods/Rests
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Targets & Trap Throwers
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>GUN STORAGE</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Gun Cabinets & Concealment
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Gun Safes & Vaults
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Gun Socks
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Rifle, Shotgun & Pistol Cases
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>GUN PARTS</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Choke Tubes
                                    </ListItem>
                                    <ListItem cursor="pointer"  color="#666" fontSize="sm">
                                    Firearm Sights
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Magazines
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Replacement Barrels & Triggers
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>RELOADING SUPPLIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Bullets & Brass
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Dies & Shell Holders
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Presses and Benches
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Primers & Powder
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>BLACK POWDER GUNS & ACCESSORIES</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Black Powder Guns
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Black Powder Bullets
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Black Powder Accessories
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>RECREATIONAL SHOOTING</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Airsoft Guns & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Slingshots
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Blowguns & Accessories
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Pellet & BB Guns
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack align={"start"}>
                                <Heading paddingBottom={"7px"} cursor="pointer" color={"#21372a"} fontWeight={"semibold"} size={"sm"}>AMMUNITION</Heading>
                                <List spacing={1}>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Centerfire Rifle Ammo
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Handgun Ammo
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Rimfire Ammo
                                    </ListItem>
                                    <ListItem cursor="pointer" color="#666" fontSize="sm">
                                    Shotshell Ammo
                                    </ListItem>
                                </List>

                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box width={"20vw"}>
                    <VStack spacing={5} align={"start"}>
                        <Image cursor="pointer" height={"40vh"} width="40vw" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGBgYGhkcGhkaGhwcHBoaGhoaHBweHBwcIS4lHB4rIRgaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhESGjEhISE0MTE0NDQ0NDQ0NDE9MTExNDQ0NDQ0NDQ0NDQ1NDExNDE0NDExNDE2NDQ0NDExNDQxMf/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwQFBgEAB//EAEAQAAIBAgQDBQYEBAUDBQEAAAECEQADBBIhMQVBUSJhcYGRBhMyUqGxQsHR8BRicoIjkqLh8QczUzVDssLSFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEBAQEBAAEDBAMAAAAAAAAAAAERAiEDMWESQVGRcdHw/9oADAMBAAIRAxEAPwD5iuJK/EPSpKXlboaplvHkR4GmLdWdZU/T9RV0W5sjkaEqRuKjLdZQPxd9SbOLB0+hqghXRTMinbSuG2R3+FFeUUQoVpoFBwUS14Ciig4BRxRAV2KBF58omuYTtAt00qDxq8QFA66+lVljGupkGmo0jWhPNT1Feu5l1MEDfkf+arhxklcvMwJ6dTU+9dRsoU958tv18hQMtuGGnodx40UUhlFElsk6Eg9f1opL4nt5QRpv12k0T4gL8Wmw7pImPt60wcPKksxDzJIiqPG3SXgDSTA2EmiL0a60JFK4epCKvQVIiilkUBWmkUJoFEUJFNNLNABFCaNqE0AEUJFGaE0A16vGuUFOe8V0nvkVMKTSnw3SsoULhBkEqfpTxf8AmWf5l/cGhTLADSD1O3rQXkCkQd/tVFijxojAxyO9SbeL5MCP36iqVh8w/uFPs4hhAkMvfuPz+9NF6pVv1rzgKCxOgEmarXxYVoGw/ZpnvRcIWdJBPlt+Z9KonWXDgEcwDTwtJxd0IhaAY0HidhR4a0wVZYFo1kc6BsaeFeRwY13Egd1QuJ4lkTbWR4HrVU+PLXFeCsRoOnOPGgucVhc2vOqLE4Mg7R4VpkYP3HeDpSGCmRoY09N/GgyrIRR2r5HOrrE8PB1GlQb/AA9hympgbh8b1q24Vila5lMAlAFjSYJnz29KpMRw10XNIjSZMEd2uhqGXMjcEajkaDfsggnYDf8AOazN66rKWUSWZgvmTB9Krmxt1xla4xXpNS8PfSQOS6D8/wB91NFnZcBQCCIH72poIOxFctuCNK61oHlVHGWhIpboRsx8Dr9657+PiHmNR6UURWgZaYGB1BmuEUCWFARTiKWaACKCKNqGgAiuRRGuUEM3VHMUxHB2M1WFDTcJZLuqAhSzBQSYAJMAk8hrvU1FiUBpT4UdPSvYnEKtx1Ql7YYhWMAsoMZtOsTXLmIzCFmefdQJNsodGA7j+lLfqAO8g6f7V04U9aW1sioJCqXAC/FtQpbde0FMdRrS7V0g6ECRlJjkdzVmuIKNB0WDqu/Z68jO3nVEO5iy2UHZTPnV7w7GKwhjrVNh1S4SXMMx0I0A8qdf4TcTtJ216rv6UFrxG0HAUHSCxI10GgA7yftUSzw500ZQy/Kdx/S3I1HwGLYMBz00PcZFaDD8YRzlfssNDPWqG4BrcZZIbaH6dAaK/wCzyNLIxtMddO0p8VOn2qQ2ERxpBpPu7lv4GMfKdRVFLjUuWGHvFzpM5l1mNpB1Gsc65wtsyM7NOug/mOvpV0eJoRkuJl8pX/aoeJ4Faft2myHqhlfQaipiI+NwxvqF2IMzHlqJ137qrsdhWCIiQ6hSSYEzOu+oGvKpVxcTZDAgOpBGYbjloeXmDT+DY5HcK4ytGWCuh5nbnp96iqbGYJFAIfKYBKsD9CB96gOjLBI0OoPIjqDV/jcScTdYKgZAQAZ1VZA7JPdOhq2OAtFBbA7I2D6GeoYaTqdqYMjYxhXnVphuJ9ai8Y4QbLDWVaY66RuPMaiqsMRQaxbqtzoLluKzdvEkc6n2eJEbmmiXiCqjMZHhuT0FNwzkqMx7XOqxr5uPmbYfCPzqdhE51VSWWltTWpbCgSRXCKYaA0C65RmgoK9kkUpbGutTQtELdREE4epNm1Aini3RqlAASu3LYAJPIVIVKNrUgjkdKCjxdkoxUjURPmAfzpOcxEmOk6VeXEn41YkADOoDSFEDMsggwAJB5bUu3hkJ0Kk9Ccp9Hg+k1BTo0Ve8F4oVMNqDpUXF8MK9rVR3iJ6ATuT3VX2Wg0G5vWbbFFbIPekKGI57jUCaW/CVl7d1QzIxXMNGEciRrI6a17hOGXEWYcTlIjWCPA1a8Ow5VSjJlCgEENmDEzImZJEbmN9hW0Uy8MvWu1YuZwPwMQD4TsfOKk4b2gAOS+hRu8R/zVhbJJjL4MDIjuI+1S7uADrldVcdGA+nf6UEQ4S1eEqQapcXwK5bOa2zKe41Ou+z5Q5rDtbPyNJXyO4+tcHGb1ns4m2cu2car6jT86Cts8auIYupP8y6HzGxoOMJZvJntqGcHtKvZYLzOWO1y2q9xD2r9tjZCNc5KxgHrr1isRjxcRoe17s8tDHkZg+VSidwyUC5WWX1COIzAGBDDYnlO9Wf8eoOV1a238/w+TDQ/Ss9bZrzy2u05VJhVAGgH71q9TG5uxOcfJcHajz1+9FNxNhSpZ9gp1BmANdOVUWK4bzX0q1XAo8qjtandDqhO+3/ABXHw1238all+ZO0PNYzD60GZu2Cu4ihROtaIZHXNpH79POkPw0TpUwRMLaJPdVsiwIriWQugpgFVQkUBFNNAwoEtQEU5qWaBRFDl8aYaGgUFowteApgFRHAtGq11VpoWqOKKciUKLTgKKHJXHsKdGUHxFOA1pirQQ7eCQbIoPWKo8VhYuZV57cq01/srmysdY0E6nbw86DhfDGe5ncb8ugFMRJ9mb6IptucrkiFbsk+E7+VaBSVcMFzDmu0iOX0PlT7/CrbpldFZY5jnpqKq8Zwi5atO9q42QKZtuSTlA1yP8StExMiiLBboIDIkgnXLGnLzOhmpWHcMJgietVHCOIWGVURipA+BpDa6knNq0kzOs1bpvvGh5SJgwDqNzpNNEgJ6dD+lcOEU6DSeR1B8Z/3roNPw94IrOVzBdMuoJkGOURmhd57VUZ21w+1axDuEVMoCEr8JYwxPQaZRy51KxGFRxlKgg8oBU+R0qtupiLTFnUXZJJez8epk57TfF5VIwmKV0DqNDubfLqHtnY9Y1oLb2Mw2Gwd24XTs3QoziWCQSfh3CmeU7CtHxf2RwGJT3ga2FJAFxWUAMTAE7AyQI3rKIMwlSHH8u48VOo+pr1q6VJZGKtsSDBPcw5juNTDUTjH/T7FWJay3vU+V947jv8Aes4l+4jFHR0cbo23iORrcYDjl22zMrHUABRGQBZ/9rRRM65GSqDjV9sRea44CMYAUAgADpO/XzNIqnxCWrnadMjfOmh+mv3qPiMDdXVWDrGxhWjx+E/SpOLwbEFeR+1KvY91GV1BJ0EaSByj6edBBs4sNo3YYfhbQ+hqTQXrgfS4iuO7df35UoYciPdXJA/A32B3+9A9xQGkDGZSQ6lOk6g+BGlOVgRIOh50UJNA1MaltQAaCjIoaDiimChUUaCiDWmgUCimLRRLTVrgoi4FAxaNnVd9T0FQrmK5DTvqKXmiJt3HMTpAA2GkVp+B3ldJAhhow/Md1Y1asuFYo2m97MLBH9R5CP3tQfQBbAQyddwO6qXj+JzItkb3ZDdyD4z5ghfFxWcs+2YDnOrQ27qZ0Gwy6aedWOBu++LXwZDHIncinmORZpPhl6URluP8WzsbSKpCmM2WWkadn5fEa1ItX8Rh1DNiFEiclwlhO2UAS3iRABnWmYfhyWSHfVlzMfFFZjHf2aq//wCbevsbjbt+wAOQGwFRWq4V7aW2gXVNs/MO0vqNR6edaT+JW5kCMrL8UhhDMfhE7dTHhXyfE8KdNYMU7gIuG7kS4bbFWM8jlBaGHMQDTTG/XFsjPdJfKgZmVlde1qFQZ9CZMDLyAmZBqus4V7lwWS7IUU3Lrpofe3NQo32knyNM9+6rlxJVlRFvEKSoDT2VZNjqOUDnFT+DYcpbzP8A9y4S7+LbDyED1qoh3sPibZkgX1H407F0DvH4vKfCiw3GFudkkOw0yt2Li93f4Vb5jUTHYS1eH+IgYjZho48GGtUCjA6KZPysMr/oa87j4WWe5h9uviKqbnDrluTbcXFMdi58WnRx+cUF7iQKG2+ZHP4LgkTyKtzoK+7x9RcdVHYDQBvoNPSZqvxeM95c7I3hVH76kmrbHYVbaKjqrhbY3gOgjdWGh8DG+5rJW75EQYI1B76zqtpYsKDlAkIMnixgufWB5GodywChflqRPyjYz37+dQbHG5yoVCqRDMWJ1My2g3P3NWK4pLhyoZCntRMQuw8CQPIGqKZ711NLi5l66H9+ddNpdCrMnOPw691WjmW/p1/uO3oP/kKjXrIcONgTAI6jc+unlQRf4h1PbXT5l1+m9Mt3wwkGolm06xBDKevIda7iVUfEMpP4hpQS2NDNRQ7DWQ6+h/Q17+NX5W9KKmCjU0C0a0DRXWuBdzvsKW1wDeqvEXIcuus7g/lQWz36Q1wmvYa6txYmCPp41x0KmDRHaNaFATt+xS7+OCCE1b5unhUEpriJq+p5J/8Arp4UPG7ZNpLucPJghfhUESoHoRWfu3CTrqam8ItM7ZM0LMleR8utTREGHdhIUxR4S+9tgVdkM6kaevI+dba1hUCxGwpV/gyPOkTTDUZbhYoLjqCZh4ARw6lWDfI0E9xnka0WHshSNNByI+4rPYbCXLIDOjNZkjNEjSJA67j1FWmGQETYu5ANkftIO4AmVHgQO6kpidews6le+I+vfUThXs7GIFwiAA2n0P6ebdK5iMXiUhnto67zbeCQOqsJI9ahYD25ALe8QqSQJVcy5RoBGYFefXeteEaTG8ES5dFx8xyxKz2WymVzDnE7VMdSeVV+B9qcO/408M2U+jhfpNWi4q2fxRO2bsz4Zt/KqIz26Q6mrF05jUVEu6UERqx/tDxVPf5SucWwQFmBnO5J7h9a0/FcWLVp7h5DQdWOg+tfMO05J3JJJPealqpZ4kwMrO4+IhtiCBoBpIHoKnpasXVUke7eBJX4SepHL6eNVSYJjyr2JsMhGvKsiViOFXF1AzL8y6/T9JqCLjLIBImQQJEjvFOtcQdfhMfn4jY1NXiCOIdYJ5iqE2OJsoUQNDqTJJ7z3/pU5cUrdhSToBMcvxHx/M1Au4CZKMGHTYj9+VQ3sOupBFBeuZIHLc+A2Hr9qTdQMSCJA+5/2+9VlrEsqkCNe7X9/rUlMaIgTmM/5j+VNBWrIBMExtHf1rs98+VdYiMoPd+s+X3os1VUhaYKWtGKAMSkiqq4CKu6jYnDg1KKhXKnMDBq1wnEAwysAe79DVZfsFaRUF5j7pywsKvTnVXats5hR503C5nOp0A1J6RWiTAG3ZS4E/7i5kB3btFRp0JBju1qWz7mIWF4SoGupNWGA4eEbMu9apOAKFCMw95asNcv6nNmylgsbCMyL6moR4e6qhI0fNl6nKxQ6eKmsc+txfut46nkCIN+Xd1qTh0JRnEZUZUZjplZgSBr3A1J4BgCcTcR1OVLF1ipH4wIHmCabfwiLgbirqLuKtBjzIIM/wClqx160l+nn3WceNpOCxL4E574FzC4kkZSDGjEFTPwOpzQdtIMSDSuO+zaKBiMO+aw/wALjdD8jAbMPrUj2bBv4e/w5+1ctE3LObXNGpX+5fuareG8RfAsTHvMK+jo2uVejDu5NuIrE2W2e/3jVz2UPEeH3eTsR31nMRh2G619Wxtu03bw7F7JAY/NaY7I57+R6DwqlxPDkIMrOumnr3mvRz1Opsc7LK+bFakYbHXLfwXHXuDEDzGxrX3uCK2n5Dz1qrxvAMsZdfDQjuIPOtBWE9qr6b5WHgVP+iAfMGrrB+267OrL4gOPUZSPQ1l73C3B0E1Deww3FNqY0XtVx1cQERPhUktE6nYbgGBr60ng2AkSecfWqXDqJ2J7hvV3buXco/AgI0GskaiSefPSqJd++idmCW5IBLE0V/hhK5rytaXkGEse4KNSdJ61N9l77i9lFprrPzVczr3g75eu30itPx7g2JNjO9pIQrca0DnfsMpYAroDlzbZpAI0miPmPEeEm20AyCAQdpB2McqgXMOy8qv7wb3tzMcylpRtwyfhK90R6GguoIqKoEulTPOpYx0iHAau4jB66VDe0RQS2w6t8Bg9D+RqPesFf+KUrEGadbxJG+vdQLt3Suo50X8Qep+n6U0BG1iK4cN4ev8AtQXArorgrorQYtFFCtGBQJuWQahXeHTtVqFowKgTwLg3vLqWZgNLXH+S2mrk+QrYcLuDEYs3SMuHwyyF5BLcBF8yEH+frVbbb+Hwhc6XcWYX+SwmsnpmYT4L317+OS3gRZtsDdvsTcH4kRNFU89SWP8AcK8fqW9Xx/E/t25mRrMBjUfCYjEtIN+4lvMe1OZlJgdDM/3Ryrtu2cmAtcymHJ8TdRm/03D61S8dcW8JgsOBvF9h4tKz3wFrUXFAxeGXT/DS3Pgtlm+9r6V5e+fpz5rcuk8Lu5r2LfnlcT/WcP8Ar9KrG/8AT8PP4r9s/wCWwhr3C8aqWsc2ZC+yrmAJhyNB/YKjXbt3+EwqtbCJnZlfODIFsJBWJXYetdPSl+qJ17VBx91sPft4tTDKwzd6zpPrHnV7xywucXE/7OIX3q9Bm+NfJj/qqpuKHUq2qsCI8dNaXwJxkexddmewC9kM3YNsyHhfmiT/AG17epnUv7cZ5mFYe3dwpL4aCrfHZeSjr0E7eseFNweNW7mKqy5dMjgypP4SecciN9Kk3CQIJPXXbypQWdTpNdJzJdibcwVxxM7N3aAGOUbGotyz+I7GdevX70PEOKoCERS7jTKnaLHv5Dwr1jg+IvD/AB7nubcz7tDLn+puX70qsqvGYm2DkEu+wS2JJPQxtTsL7I3rvbxBGHt/+NYa4R38l8/StVwnh6ITbwlgsw+Jlgt/fcMBfAkCi426YZFa/dDljAS2WFsf13AJfcfDliDrQVGI9mLLoLWEtOby66SzPPzsdE20PZH5Pu+xSYREvY55LsEWzaOrOQSFLka7ahQDpoxrnBfbK/79bWCtNeGYZ7dtQtoJPaM8m/nMa8zX032kw+Hu4d1xOX3LDtFyFg8irHZgdooPlD+1b2XFqwlq0mua3ZGZgZge8cTmf+4kRrFa7iXtCU4e2IYdsKQkj4mLZV0/qj0NUNjDYe32bFsPGguXUyrHVbIOZ/7iqnoaXxe1ntuXcu+RguaOyI2RQMqD+kDxNUZjh+Etph3xV+47oWK2l+Es0mTGsSQdNhBOtZ44gtqzBVzZgo1aOQJ6VJuXXfA5SSRZv7fKrp2fLMG9ai4PBSMzelRUvQieRpNy3NScoGlAy0Fbdww5VFe0RVsy0h0oKyizGpT2hSfc1BeCuigmiBrQYppgpSimLQMWpOEw6u6IzZVY9sjSEUFnMnQdkGoy0DqxbTRSIJ5nXUecCs9S2WRrnN8pj3s9wFnZrYKpba5EraXrED4QfTvqRjLrYq+rRDXnREHMICAgMDU7E1Ce0GAB5GfpHprXL5uq6PZZVZDIzKGE9YYEfSud9PJ4/GL9X5X/ALTXfe4xlSMqOllJmAqDLrHLb0q3ucZujHYhnw5Y2UIb3bZlXsOuaWjQZz6VjkcoiOxEi4jsf7wSfCp9jijh7pb4sRbIPi9wE+ilq49ejufEn71vnqf78JOBvWhh7qG2ud7tshiBmUFM7QeXw/WhwuMLolvX/DNwb83uE6+AUetRUsH3hedCBp3jQmfCKmJbCkkaSZPj1+grvz6c58/Os3vZnwlhoBG9Qsdh2YK6aOhJUnY6QVP8pGhrq4jMSqAu3PLED+pjoPvULiCuLltLzQj6diQA3ysx1M9dN9q6XL4c5cqZc4kAAkF3gAKgnXvPSmpw67dj37+7T/x2/ij+ZuX70qy4RgS3Yw1rTYtsv9zn7D0rSWOC4a0VbF30LMYVCwRCempzP56d1VNUfBuGE9jC2ZjRmWAB/VcOg8B6VruHeyC6NiHzn/x2yVQeLaM3+kdxq8N+3aTMzJbtoNyVRFH0AFYP2j/6s4e1KYZTiHH4tVtjz3byEd9Z0bzGYNPcG2uS0gEiAoRcpnVdAVkajSROoOtfI/ar2jwwBV19+pkf4JbI5WNP4hlAjX8Csf5hWH9ofa3FYw/490lJkW17Nsf2jfbdpNRzZxF2znYk2rSwMxAACwNF5nUCY6CaLjacL/6pjDgJZwFlLY/CrsD4lsup7yKXf9sbd+8zsXPvD2Rd1awx3VCOz7s8mAVgdGkQa+cTTLaFiFG5MU0x9PtWnfX4F6n66bmiuWbY+K47eCgDykmayxt3lRVTEM9xlBCL2mKrPwE9qVHLfQxtUK3YYguQzR8R3I1iWnvrWpi4xuFFpy9sZ0cZbiPIV1JmJA0PQjUVAFsDRMx/kfS4B3R2bg7xr3V2xxDLpBjp18tqdcvWnXpGpVtNtZU8j4GghhgdRQtXsRIJJmdO2QJg7C4B4Rm3HOgDz3Ebjp/t31FA1LYU1qW1AlloMtOagigmiiBoBRCgMGmClLRrVU1TTENLU0a0DlpgpKGjQ0Q/LyI0rq21LBo1WYPQHf7UANMVqB/vIBJ21J8q7gLPvkDuxysPgGg3I1IOugGlV3ErhFto6VT8N41dRfdIAST2SeXcBzoje3LiWlzMyqo8AB4Vm+McbS8MltC0HR20A71XcnxioD4XXPibuvLMZPgqjbyqPf4yqdmygH8zan05VCRsuF+0mPxNtbOFtKmQBLl5ogMBrA2U84g71G43wfB2bdxsZi3v4t0OSCWZWOq9mdBPzECNqxmB4viELpauOvvSMwTdjyiBIOsaRV3gfZwhpv5kYjN7pYa+06y09mwP5n1HSsddzmbWpzbfChxt+8wUXrjkADKruWgRAhSezpT+A8Bu4u57uyFZgJJLABVmJM8tau73sXeuMzooSyAC1x3hE2DZnbVjz0Gs6CIqr4ZcuYO/bvqc2VhIH4lOjL3yPyqc9zqbKtlnhUpg3YkKJAJE8tKteGI+W9h3nK1tnA6OkEHz/SthxfguQm7ZGazc7alROXP2iGA2Gpg7RHOs9iFeSERixhZALErIYgBZOpABJ6HrptlXtwdcu5mp9jg9r+Ce5dcWnS6fdOQe32U7BCgkiZ1GxBPWrUYVUAOIbIYkWkhrrf27IP5njwrOe0eMa86qFCqgyoi6qinWJOrMdyx1JoKcX2zBsxzAggzBBGoIPKDWlwnF2vmSQuIHPQLfHRhsLkeTDQ8qzjYJwJikjTuIoL++gMsggfiTWVPOJ1juOoqMfyorGNNzcxdHP5wOv8/fz51xgG1UQea/cgdO7lVD8JiAvZMQfxfk3Ufak4mxkOZfhHnl/VD9KQTUjD3/AMJ8v0PdVAo8+W46Vw0u8mQ6bcvzQ/cUwGRNQAaGjNDQSRRCgBohQGtGKBTXQaocpowaUDTAaKappgNJDUamiHhqMHWkTRA0BXVBBFZrHYQ22DKSNZB6GtLNJv4dXENSjKM7u2ssT51PwvB2bVjHdzq6sYRE2AqSDWcFThkvWHJsAqdg4IBAI113HMaVc8A4/aw9p2uKL1xjKqzwgb5mVe05218RMaVyaLhuJ4faYriMPcZpJDpcC6ELAynoQxmfxVy9TiWbY6c9WeEvAcbuYm6HxjMMOmuUW5ROmW2BlHi0/nTX9scPbuZcDZVGaFOJvE3LsaCRmnIOZiTpOprt3E8FuSGGNTNuQwI02kAwfSs7ft4csVw7FgvaUugU6cmAJkHUeE1y54ltzY1b4nwff41i8NcbD3brpkZiCFQkhiWzBmUypzSI5Go2J487ntYi6y9MxWfHLFTQRi8MGePfYUQwO72Z+rIT6VBXBpyArvx1sy+8c7zl1DbFM2ltMoO57+tOw2Ey9o6nrUpUA2FcNdGS3WqrHYX8Qq3Y0hxNBnqsLN/Nzhxz+eP/ALfegxmG5ioQ+oqC0IzdoDxA69wqTawYAzXGyqIMT2iPsvn6VGts8Z17IYQzE5Vnnr+KYmBJqFiLsn4i3fsPIfmaokcRxYZ5WYzT3eVdwzgiKrwafh21oJrUNdJrlBIFEDQrXaoYK6DQrR0UamiBpYo1ohgaiU0AoxQEppitSRTaA81ezVwV4UHaINQGumg6GqPfwSMZZQT1p4rtEV7cLt/L9TUjD4ZUHZAHXrTnrg/KoquxSujF0nUQwHMeHPvFSMMxKqSCDG1OagFTJum3HmNCTXWoDWgJNLamGlmoEutVuJsxqKs2qJidjQV7OTuSYEDuHTwoQK9XRUHQKk2EoLVSVoCoZoqCqP/Z' />
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

  export default Modal3