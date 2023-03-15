import React, { useEffect } from 'react'
import "./about.css"
import hicking from '../asserts/hicking.jfif'
import img5 from '../asserts/img5.jpg'
import mountain from '../asserts/mountain.jfif'
import video2 from "../asserts/video2.mp4"
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          why hikings
        </h2>
        <div className="mainContent container grid">
          <div  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2000" className="singleItem">
            <img src={mountain} alt="" className='imgs' />
            <h2>100+ Mountains</h2>
            <h6>
              Research shows that a chance to break away from normal rhythms of daily life reduces and improves health and well-being
            </h6>
          </div>

          <div   style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2500"className="singleItem">
            <img src={hicking} alt="" className='imgs' />
            <h2>1000+ Hikings</h2>
            <h6>
              Research shows that a chance to break away from normal rhythms of daily life reduces and improves health and well-being
            </h6>
          </div>

          <div  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="3000" className="singleItem">
            <img src={img5} alt="" className='imgs' />
            <h2>2000+ Customers</h2>
            <h6>
              Research shows that a chance to break away from normal rhythms of daily life reduces and improves health and well-being</h6>
          </div>


        </div>

        <div className="videoCard container">
          <div className="ct grid">
            <div   className="cardText">
              <h2>Wonderful House experience in there</h2>
              <small>The Adventure subracking is based on an equally weighted average of scores from five country </small>
            </div>
            <div className="cardVideo">
              <video src={video2} autoPlay loop muted type='video/mp'></video>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About