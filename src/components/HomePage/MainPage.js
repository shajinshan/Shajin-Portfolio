import React from 'react'
import '/Users/shajinshan/Desktop/react/portfolio/src/components/HomePage/css/mainPage.css'
import ExperiencePage from './experience/ExperiencePage'

function MainPage() {
  return (
    <div>
        <div className='profile-container'>
            <div className='profile-img'>
                <img src='images/profilepic.jpg'></img>
            </div>

            <h1>S.SHAJIN</h1>
            <p>JAVA FullStack Developer</p>
        </div>
        <div className='experiece-component'>
            <h4>Experince</h4>
            <ExperiencePage/>
        </div>
    </div>
  )
}

export default MainPage