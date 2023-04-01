import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Product } from "./Product";

const Camping = () => {
  return (
    <>
      <Navbar />
      <Product endpoint={"camping"} categories={["Kitchen", "tents", "Lighting"]} />
      <Footer />
    </>
  );
};

export default Camping;
