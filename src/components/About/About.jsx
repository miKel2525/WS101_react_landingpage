import React from 'react';
import './About.css';
import aboutBg from '../../assets/ku.png';



const About = () => {
  return (
    <div id="about" style={{ backgroundImage: `url(${aboutBg})` }}>
      <h2>Importance of Web Development</h2>
      <p>
        Web development is a important aspect of the digital world, enabling the creation of websites and web applications
        that connect people, businesses, and information across the globe. It combines creativity with technical expertise
        to build responsive, user-friendly, and accessible digital experiences. Whether for personal blogs, corporate websites,
        or complex web applications, web development plays a vital role in shaping the online landscape.
      </p>

      <div className="work-list">
        <div className="work">
          <div className="content-box">
            <h3>Brand Identity</h3>
            <p>A well-designed website can help generate a strong brand identity by communicating a company's mission and values,
              as well as showcasing its products and services.</p>
          </div>
        </div>
        <div className="work">
          <div className="content-box">
            <h3>Convenience</h3>
            <p>Web development can help businesses interact with their guests and meet their requirements more accessible. Guests can use a
              website to learn about a company's immolations, make purchases, give feedback, and contact client service.</p>
          </div>
        </div>
      </div>

      <div className="work-list">
        <div className="work">
          <div className="content-box">
            <h3>User Experience</h3>
            <p>Good web development focuses on creating user-friendly and accessible websites. This includes designing intuitive navigation,
              fast load times, and responsive layouts that work across different devices and screen sizes.</p>
          </div>
        </div>
        <div className="work">
          <div className="content-box">
            <h3>Innovation and Technology</h3>
            <p>Web development drives technological innovation. It encompasses various skills and technologies, from HTML and CSS to complex
              JavaScript frameworks and server-side programming.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
