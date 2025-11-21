import React from 'react'
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
        <div id='contact' style={{height:'67vh',width:'100%'}} className='mt-5 bg-dark text-white'>
            <h2 className='text-center py-3'>FUTUREVISION</h2>
            <hr />
            <div className='d-flex align-items-center px-5 mx-5 fs-5 '><a className='text-white' href=""><i className="fa-brands fa-facebook me-2"></i></a> <a className='text-white' href=""><i className="fa-brands fa-instagram me-2"></i></a> <a className='text-white' href=""><i className="fa-brands fa-x-twitter me-2"></i></a> <a className='text-white' href=""><i className="fa-brands fa-github me-2"></i></a> <a className='text-white' href=""><i className="fa-brands fa-youtube me-2"></i></a></div>
            <div className='d-flex align-items-center px-5 mx- mt-2'>
                <input style={{width:"15%"}} className='form-control bg-secondary ' type="mail" placeholder='yourname@mail.com' />
                <button className='btn btn-outline-light ms-3'> SUBSCIBE <MdEmail className='mb-1' /></button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center'>
                <div className=" m-5 ">
                    <h4 className='ms-5'>Solutions</h4>
                    <div className='d-flex flex-column'>
                        <a className='ms-5 text-white text-decoration-none mt-2' href="">Marketing</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Development</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Automation</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Analytics</a>
                    </div>
                </div>
                <div className=" m-5 mt-4 ">
                       <h4 className='ms-5'>Support</h4>
                    <div className='d-flex flex-column '>
                        <a className='ms-5 text-white text-decoration-none mt-2' href="">Submit ticket</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Documentation</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Guides</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href=""></a>
                    </div>
                </div>
                <div className="m-5">
                    <h4 className='ms-5'>Company</h4>
                    <div className='d-flex flex-column'>
                        <a className='ms-5 text-white text-decoration-none mt-2' href="">About</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Blog</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Jobs</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Press</a>
                    </div>
                </div>
                <div className=" m-5 mt-4">
                    <h4 className='ms-5'>Legal</h4>
                    <div className='d-flex flex-column'>
                        <a className='ms-5 text-white text-decoration-none mt-2' href="">Terms of Service</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">Privcy policy</a>
                        <a className='ms-5 text-white text-decoration-none mt-1' href="">License</a>
                        
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center '>&copy; 2025 FutureVison, Inc. All rights reserved.</p>
        </div>
  )
}

export default Footer