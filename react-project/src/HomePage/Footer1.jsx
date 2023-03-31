import { Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const Footer1 = () => {
  return (
    <Flex gap={"3vw"} align={"center"}  height={"12vh"} borderTop="1px solid lightgrey" borderBottom={"1px solid lightgrey"}>
            <Text pl={"2vw"} fontSize="2xl" fontWeight="semibold" >CONTACT BASS PRO SHOPS</Text>
            <Text cursor={"pointer"} _hover={{textDecoration:"underline"}}>Live Chat</Text>
            <HStack>
                <AiOutlineMail cursor={"pointer"} fontSize="30px"/>
                <Text fontSize={"lg"} cursor={"pointer"} _hover={{textDecoration:"underline"}} fontWeight={"500"}>Email Us</Text>
            </HStack>
            <HStack>
                <FiPhoneCall cursor={"pointer"} fontSize={"30px"} />
                <Text fontSize={"lg"} cursor={"pointer"} _hover={{textDecoration:"underline"}} fontWeight={"500"}>1-800-227-7776</Text>
            </HStack>
            <HStack>
                <AiOutlineQuestionCircle cursor={"pointer"} fontSize={"30px"} />
                <Text fontSize={"lg"} cursor={"pointer"} _hover={{textDecoration:"underline"}} fontWeight={"500"}>FAQs</Text>
            </HStack>
            <Text fontSize={"lg"} cursor={"pointer"} _hover={{textDecoration:"underline"}} fontWeight={"500"}>Support ID: UBD337221938 ?</Text>
    </Flex>
  )
}
