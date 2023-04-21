import React from "react";
import webimage from "../src/images/codingpair.svg";
import CompCommon from "./CompCommon";

const About = () => {
  return (
    <>
     <CompCommon 
      imgsrc={webimage}
      visit="/contact"
      btnname="Contact Now"
      myfirstname="Mamta_"
      myname="Web Developer"
      anim="img-fluid animatedAbout"
     />
    </>
  );
};

export default About;
