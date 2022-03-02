import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import {VscMultipleWindows} from 'react-icons/vsc'
import {BsAward} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "active" : ""}><FaGraduationCap/></a>
      <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><BsFileEarmarkCode/></a>
      <a href="#work" onClick={() => setActiveNav("#work")} className={activeNav === "#work" ? "active" : ""}><MdWorkOutline/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><VscMultipleWindows/></a>
      <a href="#awards" onClick={() => setActiveNav("#awards")} className={activeNav === "#awards" ? "active" : ""}><BsAward/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
