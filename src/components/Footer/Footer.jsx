import React, { useEffect } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import "./footer.css"
import Aos from "aos"
import "aos/dist/aos.css"
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div style={{overflow:"hidden"}} data-aos="fade-up" data-aos-duration="2000" className="logoDiv">

          <div  style={{overflow:"hidden"}} data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <a href="#" className='Logo'>
              <h1 className='flex'>
                <MdOutlineTravelExplore className='Logo' />
                Beta.
              </h1>

            </a>

          </div>
          <div  style={{overflow:"hidden"}} data-aos="fade-up" data-aos-duration="3000" className="socials flex">
            <ImFacebook className='cons' />
            <BsTwitter className='cons' />
            <AiFillInstagram className='cons' />
          </div>

        </div>


        <div  style={{overflow:"hidden"}} data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">
            Information
          </span>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>

        </div>




        <div  style={{overflow:"hidden"}} data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className='phone'>+237 678 471 601</span>
          <span className='email'>hyzeala28@gmail.com</span>
          {/* <li>
    <a href="#">Destination</a>
  </li>
  <li>
    <a href="#">Support</a>
  </li>
  <li>
    <a href="#">Travel & conditions</a>
  </li>
  <li>
    <a href="#">Privacy</a>
  </li> */}

        </div>


      </div>


    </div>
  )
}

export default Footer