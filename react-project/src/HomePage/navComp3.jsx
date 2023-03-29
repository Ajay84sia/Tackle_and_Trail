import { Flex, Text } from "@chakra-ui/react"
import Modal1 from "./modal1"
import Modal2 from "./modal2"
import Modal3 from "./modal3"
import Modal4 from "./modal4"
import Modal5 from "./modal5"
import Modal6 from "./modal6"
import Modal7 from "./modal7"

function NavComp3(){
    return(
        <Flex pl={"6vw"} gap={"4vw"} h="7vh" align={"center"}>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal1 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal2/></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal3 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal4 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal5 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal6 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px"><Modal7 /></Text>
            <Text fontWeight={"semibold"} fontSize="19px">Outdoor Rec</Text>
            <Text fontWeight={"semibold"} fontSize="19px">Home & Gift</Text>
            <Text fontWeight={"semibold"} fontSize="19px">Bargain Cave</Text>
        </Flex>
    )
}

export default NavComp3