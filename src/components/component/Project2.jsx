import React from 'react'

function Project2() {
  return (
    <section className="experience-section">
    <h3 className="project1-title">Projects</h3>
    <div className="experience-content">
        <h3 className="job-title">Expense Tracker Web Application</h3>
        <div className="experience-details">
            <div className="projext1-icon">
               <img src='images/expense.png'></img>
            </div>
            <div className="experience-description">
                <div className='tools'>
                <h5 >Tools :</h5>
                <li>Java</li> <li>Spring Boot</li> <li>MySql</li> <li>React js</li> </div>
                
                <li>Built an app to track daily expenses, including a detailed breakdown of spending categories.</li>
                <li>Integrated budget alerts and visual graphs to help users manage their finances.</li>
                <li>Incorporated secure authentication using Spring Security</li>
                <a href="https://www.srishtis.com/" target="_blank" rel="noopener noreferrer">www.srishti.com &gt;</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Project2