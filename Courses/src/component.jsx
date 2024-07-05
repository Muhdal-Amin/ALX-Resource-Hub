import React from 'react';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALX Resource Hub</title>
        <link href="./styles.css" rel="stylesheet" type="text/css" />
        <link href="./Images/alx logo.png" rel="icon" type="image/x-icon" />
        <script crossOrigin="anonymous" src="https://kit.fontawesome.com/76c056470e.js"></script>
        <script src="animate_on_scroll.js"></script>
        <script src="./APIs/mockData.js"></script>
        <script src="./APIs/api3.js"></script>
      </head>
      <body>
        <section>
          <div className="nav-container">
            <div>
              <a href="index.html">
                <img className="logo" src="./Images/alx logo.png" />
              </a>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a className="link" href="index.html">
                      <i className="fa-solid fa-house" /> Home
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#about">
                      <i className="fa-solid fa-user" /> About
                    </a>
                  </li>
                  <li>
                    <a className="link" href="./Documents/ALX SE Guide_May_2022.pdf" target="_blank">
                      <i className="fa-solid fa-code" /> Guide
                    </a>
                  </li>
                  <li>
                    <a className="link" href="./Courses/courses.html">
                      <i className="fa-solid fa-book-open" /> Courses
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#faqs">
                      <i className="fa-solid fa-question" /> FAQs
                    </a>
                  </li>
                  <li>
                    <a className="nav-btn" href="#">
                      Search....   
                      <i className="fa-solid fa-magnifying-glass" />
                    </a>
                  </li>
                  <li>
                    <a className="nav-btn1" href="./User_Auth/index.html">
                      Sign In
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section>
          <div
            className="pt-2 pr-2 pb-2 pl-2 box-border my-5 mx-0 w-full h-[35vh] pt-10 bg-transparent relative z-[-1] ml-20 -mt-2 mr-6 text-[1.1em] leading-6 pl-5 pr-5 pb-12 rounded-3xl text-stone-900 bg-repeat italic opacity-0 font-medium mb-3.5 flex overflow-hidden top-[16.88rem] left-[-13.63rem] object-contain bottom-0 text-center leading-6 flex-row items-center cursor-pointer border-[#365e67] whitespace-nowrap right-[1.25rem] gap-40 justify-between"
            id="welcome-container"
          >
            <div className="content-container">
              <h1 className="welcome-header animate-on-load1">
                Welcome to the ALX Resource Hub!
              </h1>
              <p className="content-details1 animate-on-load3">
                Explore a diverse array of resources, carefully curated to empower and inspire,
              </p>
              <p className="content-details2 animate-on-load2">
                Dive in and discover a world of information at your fingertips!
              </p>
              <p className="animate-on-load1">
                <a className="content-link" href="./Courses/courses.html">
                  Explore Our Courses
                </a>
              </p>
              <img
                className="astronaut"
                src="./Images/a5e3da99a7cb844a2c01af20ba34d69a-removebg-preview.png"
              />
              <p className="p-i">
                <i className="fa-solid fa-angles-down" />
              </p>
            </div>
          </div>
          <svg
            height="85"
            preserveAspectRatio="none"
            style={{ backgroundColor: '#96b9c1' }}
            viewBox="0 0 100 100"
            width="100%"
          >
            <path
              d="M0,0  L110,0C35,150 35,0 0,100z"
              fill="#282A35"
              id="wavepath"
            />
          </svg>
        </section>
        {/* Additional sections go here */}
      </body>
    </html>
  );
};

export default App;
