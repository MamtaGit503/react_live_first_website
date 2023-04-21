import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <section className='sec1'>
    <h1>404 Error page</h1>
    <p>Sorry! Page not found</p>
    <NavLink to='/'><button className='buttonerror'>Go Back</button></NavLink>
    </section>
    </>
  )
}

export default Error;