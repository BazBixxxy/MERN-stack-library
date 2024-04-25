import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import {
  FaBeer,
  FaPiedPiper,
  FaSearch,
  FaUser,
  FaAngleDown,
} from "react-icons/fa";
import { NavLink, useLoaderData, Link } from "react-router-dom";
import Media from "react-media";

const Navbar = () => {
  const active = ({ isActive }) => (isActive ? "active" : "not-active");

  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const focus = () => {
    searchRef.current.focus();
  };

  sessionStorage.setItem("search", search);

  const queries = {
    small: "(max-width: 900px)",
  };

  return (
    <Media query={queries.small}>
      {(matches) =>
        matches ? (
          <nav>
            <div className="left small">
              <Link to="/">
                <FaPiedPiper className="icon" />App
              </Link>
            </div>
            <div className="right small">
              <ul>
                <li>
                  <NavLink className={active} to="/library">
                    Library
                  </NavLink>
                </li>
                <li>
                  <NavLink className={active} to="/add">
                    Add Book
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <nav>
            <div className="left">
              <Link to="/">
                <FaPiedPiper className="icon" /> my library
              </Link>
            </div>
            <div className="middle">
              <FaSearch onClick={focus} className="icon search" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search disabled"
                ref={searchRef}
              />
            </div>
            <div className="right">
              <ul>
                <li>
                  <NavLink className={active} to="/library">
                    Library
                  </NavLink>
                </li>
                <li>
                  <NavLink className={active} to="/add">
                    Add Book
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
      }
    </Media>
  );

  return (
    <nav>
      <div className="left">
        <FaPiedPiper className="icon" /> my library
      </div>
      <div className="middle">
        <FaSearch onClick={focus} className="icon search" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search disabled"
          ref={searchRef}
        />
      </div>
      <div className="right">
        <ul>
          <li>
            <NavLink className={active} to="/">
              Library
            </NavLink>
          </li>
          <li>
            <NavLink className={active} to="/add">
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
