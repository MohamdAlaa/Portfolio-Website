import React from 'react'
import "./About.css"

const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
            <ul>
                <li>
                Talented and CreativeFront End Developer skilled at designing sites and writing clean code. Work Experience Matched content tocustomer specifications through skilled design, writing and editing. 
                </li>
            </ul>
            <ul>
            <li>
                Created innovative designs with use of programming languages,Framework and tools Developed and deployed successfull
                </li>
            </ul>
          </p>
        </div>
      </div>
    );
  };
  
  export default About;