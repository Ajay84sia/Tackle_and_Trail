import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from './Product'

const Outdoor = () => {
  return (
    <>
    <Navbar />
    <Product endpoint={"outdoor"} categories={["sleeping-gear", "pack and bags"]}/>
    <Footer />
  </>
  )
}

export default Outdoor