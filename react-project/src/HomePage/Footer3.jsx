import { Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillTwitterCircle , AiFillYoutube } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { BsFacebook ,BsInstagram } from "react-icons/bs";
import { SiToyota } from "react-icons/si";


export const Footer3 = () => {
  return (
    <Flex gap={"3vw"} align={"center"}  height={"12vh"} borderBottom={"1px solid lightgrey"}>
            <HStack spacing={"2vw"}>
                <Text cursor={"pointer"} pl={"2vw"} fontSize="2xl" fontWeight="semibold" >FOLLOW US</Text>
                <BsFacebook cursor={"pointer"} fontSize={"40px"} />
                <AiFillTwitterCircle cursor={"pointer"} fontSize={"50px"} />
                <AiFillYoutube cursor={"pointer"} fontSize={"60px"} />
                <FaPinterest cursor={"pointer"} fontSize={"40px"} />
                <BsInstagram cursor={"pointer"} fontSize={"40px"} />
            </HStack>
            <Spacer />
            <HStack pos={"relative"} right="5vw" spacing={"2vw"}>
                <Text cursor={"pointer"} pl={"2vw"} fontSize="2xl" fontWeight="semibold" >PROUD PARTNERS</Text>
                <HStack>
                    <SiToyota cursor={"pointer"} fontSize={"40px"} />
                    <Text cursor={"pointer"} fontWeight={"500"}>TOYOTA</Text>
                </HStack>
                <Text cursor={"pointer"} fontStyle={"italic"} fontSize="xl" fontWeight="semibold"  >PROGRESSIVE</Text>
            </HStack>
    </Flex>
  )
}
