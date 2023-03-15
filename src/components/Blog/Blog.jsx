import React, { useEffect } from 'react'
import "./blog.css"
import { BsArrowRightShort } from "react-icons/bs"
import house6 from "../asserts/house6.jfif"
import house5 from "../asserts/house5.jfif"
import house7 from "../asserts/house7.jfif"
import houes8 from "../asserts/houes8.jfif"
import Aos from "aos"
import "aos/dist/aos.css"

//map method
const post = [
  {
    id: 1,
    postImage: house6,
    title: "Beautiful Morocco, let us travel",
    decs: "The kingdom of morocco is a muslim country in western North Africa, with coastlines on the Atlantic ocean and mediterran sea.",

  },
  {
    id: 2,
    postImage: house5,
    title: "Romantic moments under Eiffel Tower",
    decs: "with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world's earliest and greatest civilizations "

  },
  {
    id: 3,
    postImage: house7,
    title: "Let us have an adventure outside Tunisia.",
    decs: "Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region",

  },
  {
    id: 4,
    postImage: houes8,
    title: "Best country in East Africa",
    decs: "When Kenva claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto. "
  }
]
const Blog = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2000"  className='secTitle'>
            Our Best Blog?
          </h2>
          <p  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2500" >  An insight to the incredible experience in the world.</p>
        </div>
        <div className="mainContainer grid">

          {
            post.map(({ postImage, title, decs }) => {
              return (
                <div  style={{overflow:"hidden"}} data-aos="fade-up"  data-aos-duration="2000"  className="singlePost">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} className="our" />
                  </div>
                  <div className="postDetails">
                    <h4>{title}</h4>
                    <h6>{decs}</h6>
                  </div>
                  <a href="../about" className='flex' data-aos="fade-up"  data-aos-duration="4500" >

                    Read More
                    < BsArrowRightShort className="icon" />
                  </a>
                </div>

              )
            })
          }




        </div>

      </div>
    </section>
  )
}

export default Blog