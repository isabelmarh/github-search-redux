import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className=" round-img"
        style={{ width: "120px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          Github Profile
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default UserItem;
