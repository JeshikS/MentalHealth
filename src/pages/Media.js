import React from "react";
import "../css/main.css";
import "../css/Media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

export default function Media() {
  return (
    <div>
      <nav>
        <div className="container">
          <NavLink to="/home" replace={true}>
            Mental Health{" "}
          </NavLink>
          <ul className="menu">
            <li>
              <NavLink to="/Journal" replace={true}>
                Journal
              </NavLink>
            </li>
            <li>
              <NavLink to="/Activity" replace={true}>
                Activity
              </NavLink>
            </li>
            <li>
              <NavLink ro="/Media" replace={true}>
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reminders" replace={true}>
                Reminders
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" replace={true}>
                Services
              </NavLink>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <NavLink to="/" replace={true}>
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink to="/Profile" replace={true}>
                <FontAwesomeIcon icon={faUserAlt} />
              </NavLink>
            </li>
          </ul>
          <button id="open-menu-btn">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <button id="close-menu-btn">
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </nav>
      <div className="media-container">
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/ga-MniJxQz8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/O9qRyFOLdQk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/1I9ADpXbD6c" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/rkZl2gsLUp4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/U9YKY7fdwyg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/thcEuMDWxoI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/ZToicYcHIOU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/GNWaWJm1A1g" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/COp7BR_Dvps" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/3QIfkeA6HBY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/mJW7dYXPZ2o" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/vix0NbikS5o" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/fRDccGSLE9k" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/yTL_bNvXJ9s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/-GXfLY4-d8w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
  <div className="mediacon">
    <iframe width={350} height={240} src="https://www.youtube.com/embed/YPG_6618sWw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
</div>

      <footer className="footerMedia">
                <div className="container footer_container">
                    <div className="items">
                        <h3>Contact Us</h3>
                        <Link to="#"><i className="fas fa-phone" /> +91 9876543210</Link><br />
                        <Link to="mailto:deshpande007123@gmail.com"><i className="fas fa-envelope" /> abc@gmail.com</Link><br />
                    </div>
                </div>
            </footer>
    </div>
  );
}
