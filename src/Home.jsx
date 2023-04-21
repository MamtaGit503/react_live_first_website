import React from "react";
import webimage from "../src/images/codingone.svg";
import CompCommon from "./CompCommon";

const Home = () => {
  return (
    <>
      <CompCommon
      name="Thanks... for visit"
      imgsrc={webimage}
      visit="/about"
      btnname="About"
      myfirstname="Hello! "
      myname="Mamta"
      anim="img-fluid animatedHome"
      />
    </>
  );
};

export default Home;
