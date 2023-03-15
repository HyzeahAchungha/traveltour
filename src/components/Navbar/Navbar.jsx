import React,{useState} from 'react'
import "./navbar.css"
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { MdOutlineTravelExplore } from 'react-icons/md'
const Navbar = () => {

  //this is to toggle the navbar
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive(' navBar activeNavbar')

  }

//this is to remove the navbar
  const removeNav = () => {
    setActive('navBar ')

  }

  // to add bacground color to the header
  const [transparent,setTransparent]=useState('header')
  const addBg=()=>{
    if (window.scrollY >=10) {
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header') 
    }
  }
  window.addEventListener('scroll',addBg)
  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <h1 className='icons'>
              <MdOutlineTravelExplore className="icons" />
              Beta.
            </h1>
          </a>
        </div>

        <div className={active}>
          
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className='navLink'>Home</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Popular</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Contacts</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Blog</a>
            </li>

            <div className="headersBtns flex">
              <button className='btn loginBtn'>
                <a href="#" className='login'>Login</a>
              </button>
            </div>
            <div className="headersBtns flex">
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          
          <div onClick={removeNav}
            className="closeNavbar">
            <AiFillCloseCircle className='icons' />
          </div>
        </div >

        <div onClick={showNav}
          className="toggleNavbar">
          <TbGridDots className="icons" />
        </div>

      </div>


    </section>
  )
}

export default Navbar