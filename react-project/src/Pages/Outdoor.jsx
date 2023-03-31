import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from './Product'

const Outdoor = () => {
  return (
    <>
    <Navbar />
    <Product endpoint={"outdoor"} />
    <Footer />
  </>
  )
}

export default Outdoor