import React from "react";
import './works.css';
import semester from './../../assets/semester-project.png';
import js from './../../assets/js-frameworks.png';
import exam from './../../assets/exam2.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">My Portfolio</h2>
            <div className="worksContainer">
                <div className="singleContainer">
                    <img src={semester} className="workImg"></img>
                    <h3>Semester Project 2</h3>
                    <p>This is my semster project.</p> 
                    <a href="https://ingvildb1.github.io/semester-project-2/" className="workLinks"><p>Link to site</p></a>
                    <a href='https://github.com/Ingvildb1/semester-project-2' className="workLinks"><p>Link to github repo</p></a>     
                </div>

                <div className="singleContainer">
                    <img src={js} className="workImg"></img>
                    <h3>Javascript Frameworks</h3>
                    <p>This is my Javascript Framework project</p> 
                    <a href="https://jolly-nasturtium-62c5db.netlify.app/" className="workLinks"><p>Link to site</p></a>
                    <a href='https://github.com/Ingvildb1/noroff-javascript-frameworks' className="workLinks"><p>Link to github repo</p></a>   
                </div>

                <div className="singleContainer">
                    <img src={exam} className="workImg"></img>
                    <h3>Project Exam 2 </h3>
                    <p>This is my Project Exam 2</p> 
                    <a href="https://eloquent-kangaroo-fda7e2.netlify.app/" className="workLinks"><p>Link to site</p></a>
                    <a href='https://github.com/Ingvildb1/project-exam-2' className="workLinks"><p>Link to github repo</p></a>     
                </div>
            </div>
        </section>
    );
}

export default Works;