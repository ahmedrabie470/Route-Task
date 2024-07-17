import React from 'react'
import { Link } from 'react-router-dom'
import MainImg from '../../Asssets/pexels-vladbagacian-3987066.jpg'
export default function Home() {
  return (
    <>
    <div className='container text-light  mt-5 text-center'>
        <div>
            
        <img className='w-50 rounded-4' src={MainImg} alt="MainImg" />
        <h1>Welcome to route task</h1>
        <h6>You can check the task from here</h6>
        <Link to="/users" className='btn btn-dark main'> Explore now</Link>
        </div>

    </div>
    </>
  )
}
