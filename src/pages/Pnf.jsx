import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://assets-v2.lottiefiles.com/a/f0470cd6-117f-11ee-a4ed-1b2d7fb6aaaf/i83iUdPISg.gif" alt="" />
      <Link to={'/'} className='btn btn-outline-primary'>Go to Home</Link>
    </div>
  )
}

export default Pnf