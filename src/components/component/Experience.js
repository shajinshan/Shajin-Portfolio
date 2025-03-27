import React, { useState } from 'react';
import './css/Experience.css';
import Project1 from './Project1';
import Project2 from './Project2';

const Experience = () => {
    const [value, setValue] = useState('intern');

    function onChangeProject0() {
        setValue('intern');
    }

    function onChangeProject1() {
        setValue('project1');
    }

    function onChangeProject2() {
        setValue('project2');
    }
    return (
        <div className='exp-back animate-fade-in'>
            <section className="experience-section">
                <h2 className="experience-title animate-slide-down">Experience</h2>
                {value === 'intern' ? (
                <div className="experience-content exp-container animate-slide-up">
                    <h3 className="job-title hover-highlight">Java FullStack Developer - intern at Srishti Innovative</h3>
                    <div className="experience-details">
                        <div className="experience-icon hover-scale">
                            <img src='https://static.ambitionbox.com/api/v2/photo/N2t4am1Cb2Yxdmc3VmFiWEwwZWpEZz09' alt="Srishti Logo"></img>
                        </div>
                        <div className="experience-description">
                            <li className="hover-translate">Gained experience in web app development using Java, Spring Boot, and React.</li>
                            <li className="hover-translate">Worked with RESTful APIs and MySQL integration.</li>
                            <li className="hover-translate">Collaborated with teams to build responsive and user-friendly interfaces</li>
                            <a href="https://www.srishtis.com/" target="_blank" rel="noopener noreferrer" className="hover-link">www.srishti.com &gt;</a>
                        </div>
                    </div>
                </div>
                ) : value === 'project1' ? (
                    <div className='exp-container animate-slide-up'><Project1 /></div>
                ):(
                    <div className='exp-container animate-slide-up'><Project2 /></div>
                )}
                <div className="carousel-dots animate-fade-in">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button onClick={onChangeProject0} type="button" className="btn btn-outline-primary hover-btn">1</button>
                        <button onClick={onChangeProject1} type="button" className="btn btn-outline-primary hover-btn">2</button>
                        <button onClick={onChangeProject2} type="button" className="btn btn-outline-primary hover-btn">3</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
