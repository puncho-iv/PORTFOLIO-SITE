import React from "react";
import "./about.css";
import ME from "../../assets/js.jpg";
import { BsAward } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  let experience = 3;
  experience += 1;
  return (
    <div id="about">
      <div className="about_header">
        <h5 className="text-light">Get To Know Me</h5>
        <h2 className="text-light">About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>{experience} Years Experience</small>
            </article>

            <a href="#portfolio" className="about_card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Projects</small>
            </a>
          </div>

          <p>
            👋 Hi there! I am a passionate Frontend Developer with a knack for
            crafting seamless user experiences. My expertise spans JavaScript,
            TypeScript, HTML, and CSS. Over the years, I have honed my skills in
            React, React-Native, and Redux.
          </p>
          <p>
            🚀 At Chiwara Development, I have contributed to the development and
            maintenance of web applications using React.js. My approach
            prioritizes responsive design principles and seamless API
            integration. Collaborating closely with UI Designers, I have
            optimized interfaces to create intuitive user experiences. Let’s
            connect and explore how I can bring your frontend projects to life!
            🌟
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
