import React from "react";
import "../css/main.css";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div>
        <nav>
        <div className="container">
          <ul className="menu">
            <li>
              <NavLink to="/Register" replace={true}>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login" replace={true}>
                Login
              </NavLink>
            </li>
          </ul>
          </div>
        </nav>
      <div className="mainclass">
        <div className="divs">
          <div className="divs-left">
            
          </div>
          <div className="divs-left">

          </div>
        </div>
        <div className="divs">
          <div className="divs-left">

          </div>
          <div className="divs-left">

          </div>
        </div>
        <div className="divs">
          <div className="divs-left">

          </div>
          <div className="divs-left">

          </div>
        </div>
        <div className="divs">
          <div className="divs-left">

          </div>
          <div className="divs-left">

          </div>
        </div>
      </div>
    </div>
  );
}
