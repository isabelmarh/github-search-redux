import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../layouts";
import Repos from "./Repos";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getUser, getUserRepos } from '../../actions/github';


const User = ({ getUser, user, loading, match, getUserRepos, repos, ...props } ) => {
console.log(props)
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Spinner />;
  }
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={login}
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username : </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company : </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Blog : </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers :{followers}</div>
        <div className="badge badge-success">Following :{following}</div>
        <div className="badge badge-light">Public Repos :{public_repos}</div>
        <div className="badge badge-primary">Public Gists : {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.github.user,
  loading: state.github.loading,
  repos: state.github.repos
});

export default connect(mapStateToProps, { getUser, getUserRepos })(User);
