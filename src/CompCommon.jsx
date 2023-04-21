import React from "react";
import { NavLink } from "react-router-dom";

const CompCommon = (props) => {
  return (
    <>
      <section id="headerhome">
        <div className="container-fluid">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>{props.name}</h1>
              <h2 className="my-3">{props.myfirstname}<strong style={{color:"rgb(15, 20, 83)"}}>{props.myname}</strong></h2>
            <div className="mt-3">
              <NavLink to={props.visit} className="btn btn-outline-success rounded-pill">{props.btnname}</NavLink>
            </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img  d-flex align-items-center justify-content-center flex-column">
            <img src={props.imgsrc} className={props.anim} alt="loading"/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompCommon;
