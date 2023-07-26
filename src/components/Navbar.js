import React from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkn({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true});

  return (
    <li className={isActive ? "active": ""}>
      <Link to={to}{...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        Monodyne Solutions
      </Link>
      <ul>
        <CustomLinkn to="/pricing" className="lii">Pricing</CustomLinkn>
        <CustomLinkn to="/about" className="lii">About</CustomLinkn>
      </ul>
    </nav>
  );
};

export default Navbar;
