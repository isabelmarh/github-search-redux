import React, { useEffect } from "react";
import UserItem from "./UserItem";
import { Spinner } from "../layouts";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { allUsers } from '../../actions/github';

const Users = ({ loading, users, allUsers }) => {
  useEffect(() => {
    allUsers();
  }, [allUsers]);

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
          <div style={userStyle}>
            {users.map((user) => (
              <UserItem
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}
                key={user.id}
              />
            ))}
          </div>
        )}
    </>
  );
};
Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users,
  loading: state.github.loading
});

export default connect(mapStateToProps, { allUsers })(Users);
