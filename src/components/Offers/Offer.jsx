import React,{useEffect} from 'react'
import "./offer.css"
import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { BsWifi } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
 import house3 from '../asserts/house3.jfif'
 import house1 from '../asserts/house1.jfif'
import house2 from '../asserts/house2.jfif'
import house4 from '../asserts/house4.jfif'
import Aos from "aos"
import "aos/dist/aos.css"


const offer = [
  {
   
     img: house3,
    Location: 'Cameroon',
    price: '$5,452'

  },
  {

     img: house4,
    Location: 'London',
    price: '$7,452'

  },
  {
   
     img: house2,
    Location: 'Mexico',
    price: '$7,452'

  },
  {
   
     img: house1,
    Location: 'Nigeria',
    price: '$7,452'

  },

]

const Offer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2000"  className="secIntro">
          <h2 className="secTitle">
            Special offer
          </h2>
          <p>From historical cities to natural
            specteculars,
            come see the best of the world!</p>
        </div>
        <div className="mainContent grid">
          {
            offer.map(({img,Location,price}) => {
              return (
                <div  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="3000"   className="singleOffer">
                  <div className="destImage">
                    <img src={img} alt='' />
                    <span className="discount">
                      30% off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>${price}</h4>
                      <span className="status">
                        For Rent
                      </span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAminity flex">
                        <MdKingBed className="iconn" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAminity flex">
                        <MdBathtub className="iconn" />
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAminity flex">
                        <BsWifi className="iconn" />
                        <small>Wifi</small>
                      </div>
                      <div className="singleAminity flex">
                        {/* <MdAirportShuttle className="iconn" /> */}
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location">
                      <MdLocationOn className='iconn' />
                      <small>450 Vine   #310{Location}</small>
                    </div>
                    <button className='btn flex'>
                      View
                      {/* <BsArrowRightShort className="iconn" /> */}
                    </button>
                  </div>

                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  )
}

export default Offer