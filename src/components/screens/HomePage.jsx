import React, { useState } from 'react';
import './css/homePage.css'
import Experience from '../component/Experience';
import Navbar from '../component/Navbar';
import Education from '../component/Education';

function HomePage() {
  const [data, setData] = useState('home');

  const handleNavChange = (page) => setData(page);

  return (
    <div>
      <header className="header animate-header">
        <a href="#" className="logo animate-logo">SHAJIN.S</a>
        <Navbar onNavChange={handleNavChange} activePage={data} />
      </header>

      {data === 'home' ? (
        <section className="home">
          <div className="home-content">
            <h1 className="varela-round-regular animate-title">Hi, I'm SHAJIN.S</h1>
            <h3 className="animate-subtitle">Java FullStack Developer</h3>
            <div className='home-p animate-text'>
            <p> I completed my Bachelor's degree in Computer Science and Engineering in 2024. During my studies, I built a strong foundation in <b>Core JAVA</b>, and after graduation, I completed an <b>internship in Java Full Stack</b> at <b>Algol</b>. During this internship, I gained hands-on experience in <b>Core Java,</b> <b>Spring Boot,</b> <b>MySQL,</b> and <b>React JS,</b> and became familiar with developing <b>REST APIs</b> and database operations. I also worked on projects involving microservices architecture, user management systems, and backend development best practices.
Currently, I am working as a <b>Java Developer</b> at <b>SASOFT Trivandrum</b>, a company specializing in delivering custom software solutions and enterprise applications. Here, I am involved in developing scalable and efficient backend systems using <b>Spring Boot</b> and microservices architecture.

</p>
            </div>
            <div className="btn-box btn-hire-talk animate-buttons">
              <a href="mailto:shajinshajin02@gmail.com">Hire me</a>
              <a href="mailto:shajinshajin02@gmail.com">Talk</a>
            </div>
          </div>
          <div className="home-sci animate-social">
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
