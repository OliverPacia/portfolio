import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const toggleNavbar = () => {
    setExpandNavbar(!expandNavbar)
  }
  const location = useLocation()
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
        <button onClick ={() => {setExpandNavbar((prev) => !prev)}}>
            <ReorderIcon className = "reorderButton">
            </ReorderIcon>
        </button>
        </div>
        <div className="links">
            <Link to="/"> HOME </Link>
            <Link to="/education"> PROJECTS </Link>
            <Link to="/experience"> EXPERIENCE </Link>
        </div>
    </div>
  )
}

export default Navbar
