import React from 'react'
import './css/Education.css'
function Education() {
  return (
    <div>

<div className='edu-container'>
<div className='edu'>
  <h1>EDUCATION</h1>
</div>
<div className='edu-content'>
  <div className='edu-clg-img'> 
<img src='images/clg.png'></img>
  </div>
  <h4>Bachelor of Engineering in Computer Science</h4>
  <li>Bethlahem Institute of Engineering Karungal,Kanyakumari District</li>
  <li>CGPA : 79.0</li>
  <li><a href='https://www.bethlahem.org/'>Bethlahem.org</a></li>
</div>
<div className='edu-date-1'>
<p>Nov 2020 - Jul 2024</p>
</div>

<div className='edu-content-2'>
<div className='edu-clg-img'> 
<img src='images/school.png'></img>
  </div>
  <h4>Higher School Education</h4>
  <li>Government Higher Secondary School Thuckalay</li>
  <li>Percentage: 75%</li>
</div>

<div className='edu-date-1'>
<p>Aug 2019 - Apr 2020</p>
</div>
</div>
    </div>
  )
}

export default Education