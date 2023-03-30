import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import { Footer1 } from '../HomePage/Footer1'
import Footer2 from '../HomePage/Footer2'
import { Footer3 } from '../HomePage/Footer3'

const Footer = () => {
  return (
    <Box bgColor={"#f7f4ec"}>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </Box>
  )
}

export default Footer