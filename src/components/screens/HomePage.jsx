import React, { useState } from 'react';
import './css/homePage.css'
import { Link } from 'react-router-dom';
import Experience from '../component/Experience';
import Navbar from '../component/Navbar';
import Education from '../component/Education';

function HomePage() {
  const [data, setData] = useState('home');

  const handleNavChange = (page) => setData(page);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">SHAJIN.S</a>
        <Navbar onNavChange={handleNavChange} />
      </header>

      {data === 'home' ? (
        <section className="home">
          <div className="home-content">
            <h1 className="varela-round-regular">Hi, I'm SHAJIN.S</h1>
            <h3>Java FullStack Developer</h3>
            <div className='home-p'>
            <p>
              I'm Shajin from Kanyakumari District. I completed my Bachelor's degree in Computer Science and Engineering in 2024.
              During my studies, I built a strong foundation in <b>Core JAVA</b>, and after graduation, I completed an <b>internship in Java Full Stack</b> at Srishti Innovative.
              During this internship, I gained hands-on experience in <b>Core Java,</b> <b>Spring Boot,</b> <b>MySQL,</b> and <b>React JS,</b> and 
              became familiar with developing <b>REST APIs</b> and database operations.
              I also completed a project for a fully functional web application like an e-commerce platform for buying orchid plants, using <b>Spring Boot</b> for the backend and <b>React JS</b> for the frontend.
            </p>
            </div>
            <div className="btn-box">
              <a href="#">Hire me</a>
              <a href="mailto:shajinshajin02@gmail.com">Talk</a>
            </div>
          </div>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/shajin-s-52394629a"><i className="bx bxl-linkedin-square"></i></a>
            <a href="https://github.com/shajinshan"><i className="bx bxl-github"></i></a>
            <a href="https://www.instagram.com/shajinshan_/"><i className="bx bxl-instagram"></i></a>
          </div>
        </section>
      ) : data === 'experience' ? (
        <Experience />
      ) : data === 'education' ? (
        <div><Education/></div>
      ) : (
        <div>Other Content</div>
      )}
    </div>
  );
}

export default HomePage;
