import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  icon: state.github.icon,
  title: state.github.title,
});
export default connect(mapStateToProps)(Navbar);
