import React from 'react';
import './Hero.css';
import headerBg from "../../assets/kis.png";


const Header = () => {
  return (
    <div id="header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="container">
        <div className="header-text">
          <h1>Web Development</h1>
          <p>
            Web development is the process of creating websites that allow users to view and interact with content over the Internet.
            Web development includes many different aspects, including the creation of a website’s design and code to create a functioning website.
            In this blog post, we look at the importance of web development.
          </p>
          <a href="#about" className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
