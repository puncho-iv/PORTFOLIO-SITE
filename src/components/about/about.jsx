import React from "react";
import "./about.css";
import ME from "../../assets/face.jpg";
import { BsAward } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
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
              <small>1+ Year Experience</small>
            </article>

            <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <AiFillFolderOpen className="about_icon" />
                  <h5>Projects</h5>
                  <small>5+ Projects</small>
                </article>

                {/* <div className="about_content">
                  <div className="about_cards">
                    <article className="about_card">
                      <AiOutlineUsergroupAdd className="about_icon" />
                      <h5>Clients</h5>
                      <small>50+ Worldwide</small>
                    </article>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <p>
            I am a results-oriented Frontend
            Developer passionate about crafting seamless user experiences.
            Specializing in JavaScript, TypeScript, HTML, and CSS, I bring
            expertise in React, React-Native and Redux to the table. In my role at Chiwara
            Development, I've developed and maintained web applications using
            React.js, implementing responsive design principles and seamlessly
            integrating APIs. My collaborative efforts with UI Designers have
            optimized interfaces, and I have a proven track record of utilizing
            Redux for state management. My commitment to precision and
            innovative problem-solving is complemented by a proactive approach
            and strong communication skills. Let's connect and explore how I can
            bring your frontend projects to life with a focus on optimal user
            experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
