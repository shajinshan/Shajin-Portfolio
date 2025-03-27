import React from 'react'
import './css/Education.css'

function Education() {
  return (
    <div className="animate-fade-in">
      <div className='edu-container'>
        <div className='edu animate-slide-down'>
          <h1>EDUCATION</h1>
        </div>
        
        <div className='edu-content animate-slide-right hover-card'>
          <div className='edu-clg-img hover-scale'> 
            <img src='images/clg.png' alt="College"></img>
          </div>
          <h4 className="hover-highlight">Bachelor of Engineering in Computer Science</h4>
          <li className="hover-translate">Bethlahem Institute of Engineering Karungal,Kanyakumari District</li>
          <li className="hover-translate">CGPA : 79.0</li>
          <li><a href='https://www.bethlahem.org/' className="hover-link">Bethlahem.org</a></li>
        </div>
        <div className='edu-date-1 animate-fade-in'>
          <p>Nov 2020 - Jul 2024</p>
        </div>

        <div className='edu-content-2 animate-slide-left hover-card'>
          <div className='edu-clg-img hover-scale'> 
            <img src='images/school.png' alt="School"></img>
          </div>
          <h4 className="hover-highlight">Higher School Education</h4>
          <li className="hover-translate">Government Higher Secondary School Thuckalay</li>
          <li className="hover-translate">Percentage: 75%</li>
        </div>
        <div className='edu-date-1 animate-fade-in'>
          <p>Aug 2019 - Apr 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Education