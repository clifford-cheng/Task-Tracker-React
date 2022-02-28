import React from 'react'
import { useHref } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer