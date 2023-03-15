import React from 'react'
import "./popular.css"
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { BsDot } from "react-icons/bs"
// import images 
import forest from "../asserts/forest.jpg"
import carmer from "../asserts/carmer.jpg"
import img1 from "../asserts/img1.jpg"
import keke1 from "../asserts/keke1.jpg"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Data = [
  {
    id: 1,
    img: carmer,
    desTitle: "Manchu Picchu",
    location: 'peru',
    grade: 'Cultural Relax'
  },

  {
    id: 2,
    img: forest,
    desTitle: "Guanajuato",
    location: 'Mexico',
    grade: 'Cultural Relax'
  },

  {
    id: 3,
    img: img1,
    desTitle: "Angokor Wat",
    location: 'Cambodia',
    grade: 'Cultural Relax'
  },

  {
    id: 4,
    img: keke1,
    desTitle: "Ejim",
    location: 'Cameroon',
    grade: 'Cultural Relax'
  },
]

const Popular = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secheader flex">
          <div  style={{overflow:"hidden"}} data-aos="fade-right"   data-aos-duration="2500" className="texDiv">
            <h2 className="secTitle">
              popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars,come see the best of the world!</p>
          </div>
          
          <div  style={{overflow:"hidden"}} data-aos="fade-left"   data-aos-duration="3000"  className="iconsDiv flex">
            <BsArrowLeftShort className="icon 
            leftIcon"/>
            <BsArrowRightShort className="icon" />
          </div>
        </div>
      </div>
      <div className="mainContent grid">
        {
          Data.map(({id,img,desTitle,location,grade}) => {
            return (
              <div  style={{overflow:"hidden"}} data-aos="fade-up"    className="singleDestination">
                <div className="destImage">
                  <img src={img} alt="" />
                  <div className="overlayInfo">
                    <h3>{desTitle} </h3>
                    <p>{location}</p>
                    <BsArrowRightShort className='iconic' />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">
                    0{id}
                  </div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className='flex'>
                      <span className="dot">
                        <BsDot className="iconse" />
                      </span>
                      Dot
                    </span>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


    </section>
  )
}

export default Popular