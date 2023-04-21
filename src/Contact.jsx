import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    password: "",
    phone: "",
    email: "",
    msg: ""
  })

  const InputEvent = (event) => {
    const {name, value} = event.target;
    setdata((prevalue) => {
      return{
        ...prevalue, [name]: value
      }
    }) 
  }

  const formsubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My password is ${data.password}. My Phone number is ${data.phone}. My email is ${data.email}. The message is ${data.msg}.`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto pb-5">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-success" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
