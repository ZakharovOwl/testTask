import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <a className="github" href="https://github.com/ZakharovOwl">
        <p>github.com</p>
        <p>ZakharovOwl</p>
      </a>
      <ul>
        <li>
          <NavLink
            to="/newsApp"
            activeClassName="link_active"
            className="list__link"
          >
            My tweets
          </NavLink>
        </li>
        <li>
          <a
            //activeClassName="link_active"
            className="list__link"
            href="https://zakharovowl.github.io/rsstut/"
          >
            TUT.by
          </a>
        </li>
        <li>
          <NavLink
            to="/finance"
            activeClassName="link_active"
            className="list__link"
          >
            Finance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
