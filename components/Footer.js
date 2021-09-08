import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-lg">
      <nav className="navbar py-4 mt-5 bg-chillblue text-white justify-content-around">
        <div className="flip py-3">
          <img
            src="/static/img/pika.png"
            alt="Pokemon"
            style={{ width: "130px" }}
          />
        </div>
        <div className="navbar bg-chillblue text-white">
          <div className="container-fluid justify-content-center mb-3">
            <span className="mb-0 h5">Pokedex Challenge 2021</span>
          </div>
          <div className="container-fluid justify-content-center mb-3">
            <span>Lucas Koval | Full Stack Developer</span>
          </div>
          <div className="container-fluid justify-content-center">
            <a
              href="https://lucaskovaldev.com/"
              target="_BLANK"
              title="Portfolio"
            >
              <img
                src="/static/icons/pf.svg"
                alt="Portfolio"
                style={{ width: "40px" }}
              />
            </a>
            <a
              href="mailto:lucaskovaldev@gmail.com"
              target="_BLANK"
              className="ms-4"
              title="Contact me"
            >
              <img
                src="/static/icons/email.png"
                alt="Email"
                style={{ width: "36px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucaskoval/"
              target="_BLANK"
              className="ms-4 me-4"
              title="LinkedIn"
            >
              <img
                src="/static/icons/li.svg"
                alt="LinkedIn"
                style={{ width: "36px" }}
              />
            </a>
            <a
              href="https://github.com/LucasKoval"
              target="_BLANK"
              title="GitHub"
            >
              <img
                src="/static/icons/gh.png"
                alt="GitHub"
                style={{ width: "36px" }}
                className="bg-white rounded-3"
              />
            </a>
          </div>
        </div>
        <div className="flip py-2">
          <img
            src="/static/img/psy.png"
            alt="Pokemon"
            style={{ width: "120px" }}
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
