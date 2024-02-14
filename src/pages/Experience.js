import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import BookIcon from '@mui/icons-material/Book';
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0a192f">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        contentArrowStyle={{borderRight: '7px solid rgb(249,140,97)'}} contentStyle={{background: "#f98c61", color:"#121123"}}date="2017 - 2019" iconStyle = {{background:"#121123", color:"#fff"}} 
        icon={<SchoolIcon/>}>
            <h3 className="vertical-timeline-element-title">
                STEM Track - Pasig Catholic College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Justice Ramon, R. Jabson St., PH
            </h4>
            <p>Senior Highschool Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        contentArrowStyle={{borderRight: '7px solid rgb(255,224,180)'}} contentStyle = {{background:"#ffe0b4", color:"#121123"}}date="2019 - 2023" iconStyle = {{background:"#121123", color:"#fff"}}
        icon={<SchoolIcon/>}>
            <h3 className="vertical-timeline-element-title">
                Bachelor's Degree - University of Santo Tomas
            </h3>
            <h4 className = "vertical-timeline-element-subtitle">
                España Blvd, PH
            </h4>
            <p>Information Technology </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        contentArrowStyle= {{borderRight: '7px solid rgb(221, 182, 165)'}} contentStyle = {{background: "#ddb6a5", color:"#121123"}}date="October 2022" 
        iconStyle = {{background:"#121123", color:"#fff"}}
        icon={<BookIcon/>}>
            <h3 className="vertical-timeline-element-title">
                PhilNITS Exam Passer
            </h3>
            <h4 className = "vertical-timeline-element-subtitle">
                 Level 1 Information Technology Password Certified
            </h4>
            <p>PhilNITS Foundation is a non-stock, non-profit, non-government organization
                that is implementing the following Certification Exams for IT and non-IT Professionals. </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement className="vertical-timeline-element--work"
        contentArrowStyle= {{borderRight: '7px solid rgb(46, 46, 82)'}}contentStyle = {{background: "#2e2e52", color: "#f0f0f0"}}date="March 2023 - May 2023 " 
        iconStyle = {{background:"#121123", color:"#fff"}}
        icon={<WorkIcon/>}>
            <h3 className="vertical-timeline-element-title">
                Software QA Intern - Rogomi, Inc.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Marco Polo Ortigas, PH
            </h4>
            <p>Responsible for creating and conducting test cases for various android mobile applications using regression and functional testing. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '7px solid  rgb(18, 17, 85)' }} contentStyle = {{background: "#121123", color:"#f0f0f0"}}
        date="January 2024" iconStyle = {{background:"#121123", color:"#fff"}}
        icon={<BookIcon/>}>
            <h3 className="vertical-timeline-element-title">
                Google IT Certification 
            </h3>
            <h4 className = "vertical-timeline-element-subtitle">
                IT Support Course
            </h4>
            <p>A training program developed by Google and hosted on Coursera, which helps prepare for entry-level IT support jobs.</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2024 - Current" iconStyle = {{background:"#121123", color:"#fff"}}
        icon={<WorkIcon/>}>
            <h3 className="vertical-timeline-element-title">
                Front End Developer - Medicomm Pacific Inc.
            </h3>
            <h4 className = "vertical-timeline-element-subtitle">
                Wellness PRO Tower, San Rafael St., PH
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus.</p>
        </VerticalTimelineElement> */}

      </VerticalTimeline>
    </div>
  )
}

export default Experience
