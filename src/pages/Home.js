import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"
import Profile from "../assets/profile-pic.png"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Oliver</h2>
        <div className="prompt">
            <p>Eager to learn and passionate Software Developer.</p>
            <a href = "https://www.linkedin.com/in/oliver-arcangel" target = "_blank">
              <LinkedInIcon />
            </a>
            <a href=
            "mailto:oliverpacia.arcangel@gmail.com">
              <EmailIcon />
            </a>
            <a href = "https://github.com/OliverPacia" target = "_blank">
              <GitHubIcon />
            </a>
    
        </div>
      </div>
        <div className="skills">
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
                <h2> Front-End</h2>
                <span> ReactJS, HTML, CSS, Bootstrap, MaterialUI</span>
                <h2> Languages</h2>
                <span> JavaScript, Java, Python, C++, C#, PHP, SQL</span>
                <h2> Soft Skills</h2>
                <span> Time Management, Organized, Committed, Listening, Adaptability  </span>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home
