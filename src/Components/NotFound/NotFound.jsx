import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <>
    <div className='container text-light  mt-5 text-center'>
        <div>
        <h1>OPps.... This page not found </h1>
        <h6>You can go back from here</h6>
        <Link to="/home" className='btn btn-dark main'> Back To home </Link>
        </div>

    </div>
    </>
  )
}
