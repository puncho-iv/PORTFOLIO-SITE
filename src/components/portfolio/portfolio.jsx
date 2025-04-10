import React from "react";
import "./portfolio.css";
import moviedb from "../../assets/Screenshot from 2025-04-06 09-44-03.png";
import IMG2 from "../../assets/16.jpg";
// import moviedb from "../../assets/movie-db.png";
import pnd from "../../assets/dashboard_duologo.svg";
import engineer from "../../assets/logo.svg";
import swift from "../../assets/Artboard 1.svg";

const data = [
  {
    id: 1,
    image: pnd,
    title: "Pay n Drive (MTN-aYo)",
    github: "https://github.com/puncho-iv",
    demo: "https://payd.rerd.net/",
    loginDetails: "username: 0246414019 password: 6645",
  },

  {
    id: 2,
    image: pnd,
    title: "Pay n Drive Admin System",
    github: "https://github.com/puncho-iv",
    demo: "https://payd.rerd.net/",
    loginDetails: "request login details",
  },

  {
    id: 4,
    image: pnd,
    title: "Pay and Drive Landing Page",
    github: "",
    demo: "https://pnd-landing-page-9qwyk.ondigitalocean.app/",
  },

  {
    id: 6,
    image: engineer,
    title: "Engineers and Planners Procurement Web Application",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: engineer,
    title: "Engineers and Planners Procurement Department Web Application",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: engineer,
    title: "Engineers and Planners Procurement Admin Web Application",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: moviedb,
    title: "Movie Database",
    github: "https://github.com/puncho-iv/movieDatabase-corrections-",
    demo: "https://movie-db-alpha-drab.vercel.app/",
  },
  {
    id: 7,
    image: swift,
    title: "Point of Sale System",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: IMG2,
    title: "Graphic Design",
    github: "https://github.com/puncho-iv",
    demo: "https://www.behance.net/UNICUSDESIGNS",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio_header">
        <h5 className="text-light">My Recent Work</h5>
        <h2 className="text-light">Portfolio</h2>
      </div>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, loginDetails }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img
                  src={image}
                  alt={title}
                  className={
                    title.includes("Pay")
                      ? "portfolio_img-small"
                      : "" || title.includes("Engineer")
                      ? "portfolio_img-small"
                      : ""
                  }
                />
              </div>

              <div className="portfolio_item-content">
                <h3>{title}</h3>
                {loginDetails && (
                  <div className="portfolio_item-login">
                    <p>{loginDetails}</p>
                  </div>
                )}
              </div>

              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
