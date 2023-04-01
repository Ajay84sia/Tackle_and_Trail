import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from './Product'

const Shooting = () => {
  return (
    <>
    <Navbar />
    <Product endpoint={"shooting"} />
    <Footer />
  </>
  )
}

export default Shooting