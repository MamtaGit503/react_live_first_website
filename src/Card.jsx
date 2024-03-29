import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                  <img src={props.imagesrc} className="card-img-top" alt="loading" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Card;
