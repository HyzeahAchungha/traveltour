import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import "./home.css"
const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">

          <h1  style={{overflow:"hidden"}} data-aos="fade-up" className=" title">
            plan your Trip with Travel Beta
          </h1>

          <p  style={{overflow:"hidden"}} data-aos="fade-up"   data-aos-duration="2500"  className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
          <button  style={{overflow:"hidden"}} data-aos="fade-up"   data-aos-duration="3000" className='e-btn'>
            <a style={{color:"white"}} href="#">Explore Now</a>
          </button>
        </div>
        <div className="homeCard grid">
          <div   style={{overflow:"hidden"}}   data-aos="fade-up" className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination' />

          </div>
          <div    data-aos="fade-up"  className="disDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder='11/meters' />

          </div>

          <div   style={{overflow:"hidden"}} data-aos="fade-up"    className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder='$140-$500' />

          </div>
           <button  className='btn'>search</button> 
        </div>
      </div>
    </section>
  )
}

export default Home