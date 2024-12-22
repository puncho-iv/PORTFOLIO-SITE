import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import "./experience.css";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "React-Native",
      "Redux",
      "Nuxt",
      "Typescript",
    ],
  },
  {
    category: "Backend Development",
    skills: ["Nestjs", "Node", "Express", "Graphql", "MongoDB", "Postgres"],
  },
  {
    category: "Graphic & UI Design",
    skills: ["Illustrator", "Photoshop", "Priemiere Pro", "Figma"],
  },
];

const Experience = () => {
  return (
    <div id="experience">
      <div className="header">
        <h5 className="text-light">The Skills I Have</h5>
        <h2 className="text-light">My Experience</h2>
      </div>
      <div className="container experience_container">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="experience_category">
            <h3>{categoryData.category}</h3>
            <div className="experience_content">
              {categoryData.skills.map((skill, skillIndex) => (
                <article key={skillIndex} className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    {/* You can add the proficiency level here if needed */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
