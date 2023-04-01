import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from './Product'

const Fishing = () => {
  return (
    <>
    <Navbar/>
    <Product endpoint={"fishing"}/>
    <Footer/>

    </>
  )
}

export default Fishing