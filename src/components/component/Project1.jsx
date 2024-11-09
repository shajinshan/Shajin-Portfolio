import React from 'react'
import '/Users/shajinshan/Desktop/react/portfolio/src/components/component/css/project1.css'
function Project1() {
  return (
    <section className="experience-section">
            <h3 className="project1-title">Projects</h3>
            <div className="experience-content">
                <h3 className="job-title">E-commerse Web Application For Buying Plants</h3>
                <div className="experience-details">
                    <div className="projext1-icon">
                       <img src='https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg'></img>
                    </div>
                    <div className="experience-description">
                        <div className='tools'>
                        <h5 >Tools :</h5>
                        <li>Java</li> <li>Spring Boot</li> <li>MySql</li> <li>React js</li> </div>
                        
                        <li>Developed a responsive e-commerce web app for plant shopping with a React frontend, including product browsing and ordering.</li>
                        <li>Enabled automated notifications using JavaMail API for order confirmations to customers and alerts to admins.</li>
                        <li>Built admin tools for managing products and sorting orders, with MySQL and JPA for backend data management.</li>
                        <a href="https://www.srishtis.com/" target="_blank" rel="noopener noreferrer">www.srishti.com &gt;</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Project1