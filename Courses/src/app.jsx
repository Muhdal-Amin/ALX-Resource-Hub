import './index.css'; // Import Tailwind CSS
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import './styles.css'; // Assuming you have copied your styles to styles.css

const App = () => {
  const [viewportHeight, setViewportHeight] = useState(600);
  const [animationSpeed, setAnimationSpeed] = useState(4000);
  const sectionsRef = useRef([]);

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const bounding = element.getBoundingClientRect();
    return bounding.top <= viewportHeight && bounding.bottom >= 0;
  };

  // Function to animate elements when in view
  const animateElementsInView = () => {
    sectionsRef.current.forEach((section) => {
      const elements = section.querySelectorAll('.animate-on-scroll1, .animate-on-scroll2');
      if (isInViewport(section)) {
        elements.forEach((element) => {
          element.classList.add('in-viewport');
          element.style.animationDuration = `${animationSpeed}ms`;
        });
      } else {
        elements.forEach((element) => {
          element.classList.remove('in-viewport');
        });
      }
    });
  };

  useEffect(() => {
    // Initial animation check
    animateElementsInView();

    // Listen for scroll events and recheck animation
    const handleScroll = () => animateElementsInView();
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [viewportHeight, animationSpeed, sectionsRef]);

  return (
    <div>
      <header>
        <div className="nav-container">
          <div>
            <a href="index.html"><img src="./Images/alx logo.png" className="logo" alt="ALX logo" /></a>
          </div>
          <div>
            <nav>
              <ul>
                <li><a href="index.html" className="link"><i className="fa-solid fa-house"></i> &nbsp; Home</a></li>
                <li><a href="#about" className="link"><i className="fa-solid fa-user"></i> &nbsp; About</a></li>
                <li><a href="./Documents/ALX SE Guide_May_2022.pdf" className="link" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code"></i> &nbsp; Guide</a></li>
                <li><a href="./Courses/courses.html" className="link"><i className="fa-solid fa-book-open"></i> &nbsp; Courses</a></li>
                <li><a href="#faqs" className="link"><i className="fa-solid fa-question"></i> &nbsp; FAQs</a></li>
                <li><a href="#" className="nav-btn">Search....&emsp; &emsp;<i className="fa-solid fa-magnifying-glass"></i></a></li>
                <li><a href="./User_Auth/index.html" className="nav-btn1">Sign In</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section ref={(el) => sectionsRef.current[0] = el}>
        <div className="welcome-container" id="welcome-container">
          <div className="content-container">
            <h1 className="welcome-header animate-on-scroll1">Welcome to the ALX Resource Hub!</h1>
            <p className="content-details1 animate-on-scroll3">Explore a diverse array of resources, carefully curated to empower and inspire,</p>
            <p className="content-details2 animate-on-scroll2">Dive in and discover a world of information at your fingertips!</p>
            <p className="animate-on-scroll1"><a href="./Courses/courses.html" className="content-link">Explore Our Courses </a></p>
            <img src="./Images/a5e3da99a7cb844a2c01af20ba34d69a-removebg-preview.png" className="astronaut" alt="Astronaut" />
            <p className="p-i"><i className="fa-solid fa-angles-down"></i></p>
          </div>
        </div>
        <svg style={{ backgroundColor: '#96b9c1' }} width="100%" height="85" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
        </svg>  
      </section>

      <section ref={(el) => sectionsRef.current[1] = el}>
        <div className="about-container" id="about">
          <div className="about-intro">
            <p className="about-header animate-on-scroll1"> Unveiling Our Story :) </p>
            <p className="about-sub animate-on-scroll2">Discover the Heartbeat Behind The ALX Resource Hub!</p>
          </div>
          
          <div className="box-container">
            <div className="content-box1 animate-on-scroll1">
              <i className="fa-solid fa-eye-low-vision"></i>
              <p className="box-p">Vision :)</p>
              <p className="box-subp">We envision a world where knowledge is not just acquired but also applied, where every individual has the tools and resources to forge their path to success. Embark on a journey to transform learning into action.</p>
            </div>
            <div className="content-box2 animate-on-scroll1">
              <i className="fa-solid fa-bullseye"></i>
              <p className="box-p">Mission :)</p>
              <p className="box-subp">Our mission at ALX Resource Hub is clear: to democratize learning. Through a diverse array of carefully curated resources, we aim to break down barriers and empower learners of all backgrounds to reach their full potential.</p>
            </div>
            <div className="content-box3 animate-on-scroll1">
              <i className="fa-solid fa-layer-group"></i>
              <p className="box-p">Values :)</p>
              <p className="box-subp">At the core of everything we do are our values - Integrity, Innovation, and Inclusivity. We uphold the highest of standards in all our interactions, constantly striving for excellence and innovation in an ever changing world.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => sectionsRef.current[2] = el} id="courses">
        <div className="courses1">
          <p className="course-p1 animate-on-scroll1">HTML&nbsp;<i className="fa-solid fa-code"></i></p>
          <p className="course-p2 animate-on-scroll2">The Language For Building Web Pages</p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="./Courses/HTML/index.html" className="course-link1">&emsp;&nbsp;Learn HTML&emsp;&nbsp;</a></p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="https://youtu.be/kUMe1FH4CHE?si=HUxajOrdMQOF7on4" target="_blank" className="course-link2">&emsp;Video Tutorial&emsp;</a></p>
          <p style={{ opacity: 0 }} className="animate-on-scroll1"><a href="https://www.w3schools.com/tags/default.asp" target="_blank" className="course-link3">&ensp;HTML Reference&ensp;</a></p>
        </div>
      </section>

      <section ref={(el) => sectionsRef.current[3] = el}>
        <div className="courses2">
          <p className="course-p1 animate-on-scroll1">CSS&nbsp;<i className="fa-regular fa-file-code"></i></p>
          <p className="course-p2 animate-on-scroll2">The Language For Styling Web Pages</p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="./Courses/CSS/index.html" className="course-link4">&emsp;&ensp;&nbsp;Learn CSS&emsp;&ensp;&nbsp;</a></p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="https://youtu.be/OXGznpKZ_sA?si=4wh6LsxQbUYU3-IM" target="_blank" className="course-link5">&emsp;Video Tutorial&emsp;</a></p>
          <p style={{ opacity: 0 }} className="animate-on-scroll1"><a href="https://www.w3schools.com/cssref/default.asp" target="_blank" className="course-link6">&ensp;&ensp;CSS Reference&ensp;&ensp;</a></p>
        </div>
      </section>

      <section ref={(el) => sectionsRef.current[4] = el}>
        <div className="courses3">
          <p className="course-p1 animate-on-scroll1">JavaScript&nbsp;<i className="fa-brands fa-square-js"></i></p>
          <p className="course-p2 animate-on-scroll2">The Language For Programming Web Pages</p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="./Courses/JS/index.html" className="course-link7">&emsp;&ensp;&nbsp;Learn JavaScript&emsp;&ensp;&nbsp;</a></p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="https://youtu.be/hdI2bqOjy3c?si=TV4g62Srbnp2_JFL" target="_blank" className="course-link8">&emsp;Video Tutorial&emsp;</a></p>
          <p style={{ opacity: 0 }} className="animate-on-scroll1"><a href="https://www.w3schools.com/jsref/default.asp" target="_blank" className="course-link9">&ensp;&ensp;JS Reference&ensp;&ensp;</a></p>
        </div>
      </section>

      <section ref={(el) => sectionsRef.current[5] = el}>
        <div className="courses4">
          <p className="course-p1 animate-on-scroll1">Python&nbsp;<i className="fa-brands fa-python"></i></p>
          <p className="course-p2 animate-on-scroll2">The Language For Backend Development, Data Science, & More</p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="./Courses/PYTHON/index.html" className="course-link10">&emsp;&ensp;&nbsp;Learn Python&emsp;&ensp;&nbsp;</a></p>
          <p style={{ marginBottom: '43px', opacity: 0 }} className="animate-on-scroll1"><a href="https://youtu.be/kqtD5dpn9C8?si=I9nk7ySltF_E_Rb6" target="_blank" className="course-link11">&emsp;Video Tutorial&emsp;</a></p>
          <p style={{ opacity: 0 }} className="animate-on-scroll1"><a href="https://www.w3schools.com/python/ref_default.asp" target="_blank" className="course-link12">&ensp;Python Reference&ensp;</a></p>
        </div>
      </section>
    </div>
  );
};

export default App;
