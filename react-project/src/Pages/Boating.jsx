import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Product } from "./Product";

const Boating = () => {
  return (
    <>
      <Navbar />
      <Product endpoint={"boating"} categories={["fish-finder", "life-vest", "float-tube"]}/>
      <Footer />
    </>
  );
};

export default Boating;
