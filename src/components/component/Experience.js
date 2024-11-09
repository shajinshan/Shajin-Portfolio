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
        <div>

            <section className="experience-section">
                <h2 className="experience-title">Experience</h2>
                {value === 'intern' ? (
                <div className="experience-content exp-container" >
                    <h3 className="job-title">Java FullStack Developer - intern at Srishti Innovative</h3>
                   
                        <div className="experience-details">
                            <div className="experience-icon">
                                <img src='https://static.ambitionbox.com/api/v2/photo/N2t4am1Cb2Yxdmc3VmFiWEwwZWpEZz09'></img>
                            </div>
                            <div className="experience-description">
                                <li>Gained experience in web app development using Java, Spring Boot, and React.</li>
                                <li>Worked with RESTful APIs and MySQL integration.</li>
                                <li>Collaborated with teams to build responsive and user-friendly interfaces</li>
                                <a href="https://www.srishtis.com/" target="_blank" rel="noopener noreferrer">www.srishti.com &gt;</a>
                            </div>
                        </div>
                   
                    
                </div>
                 ) : value === 'project1' ? (
                    <div className='exp-container'> <Project1/> </div>
                ):(<div className='exp-container'><Project2/></div>)
                }
                <div className="carousel-dots">
                    
                <div class="btn-group me-2" role="group" aria-label="First group">
    <button onClick={onChangeProject0} type="button" className="btn btn-outline-primary">1</button>
    <button onClick={onChangeProject1} type="button" className="btn btn-outline-primary">2</button>
    <button onClick={onChangeProject2} type="button" className="btn btn-outline-primary">3</button>
    
  </div>

                    </div>
            </section>


        </div>
    );
};

export default Experience;
