import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { showAlert } from '../../actions/alert';
import { searchUsers, clearUsers } from '../../actions/github';

const Search = ({ users, searchUsers, clearUsers, showAlert }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      return showAlert("Invalid Search String", "danger");
    }
    searchUsers(text);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={changeHandler}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={() => {
            clearUsers();
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users
})

export default connect(mapStateToProps, { searchUsers, showAlert, clearUsers })(Search);
