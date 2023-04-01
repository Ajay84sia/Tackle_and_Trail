import { Divider } from '@chakra-ui/react'
import React from 'react'
import NavComp1 from '../HomePage/navComp1'
import NavComp2 from '../HomePage/navComp2'
import NavComp3 from '../HomePage/navComp3'

const Navbar = () => {
  return (
    <>
      <NavComp1 />
        <Divider colorScheme="gray.700" variant="solid" />
      <NavComp2 />
      <Divider colorScheme="gray.700" variant="solid" />
      <NavComp3/>
      <Divider colorScheme="gray.700" variant="solid" />
    </>
  )
}

export default Navbar