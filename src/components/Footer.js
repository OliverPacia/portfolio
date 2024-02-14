import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className = "footer">
      <div className="socialMedia">
        <a href = "https://www.facebook.com/christianoliver.arcangel/" target = "_blank">
          <FacebookIcon />
        </a>
        <a href = "https://www.linkedin.com/in/oliver-arcangel" target = "_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        &copy; 2024 Oliver Arcangel
      </p>
    </div>
  )
}

export default Footer
