import React from "react";
import { Navbar, Alert, About } from "./components/layouts";
import { Users, Search } from "./components/users";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/users/User";

//Redux 
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  // const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get("https://api.github.com/users");
  //       setUsers(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       showAlert("Error", "danger");
  //     }
  //   };
  //   fetch();
  // }, []);

  // const searchUsers = async (text) => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/search/users?q=${text}`
  //     );
  //     setUsers(res.data.items);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     showAlert("Error", "danger");
  //   }
  // };

  // const getUser = async (login) => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`https://api.github.com/users/${login}`);
  //     setUser(res.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     showAlert("Error", "danger");
  //   }
  // };

  // const getUserRepos = async (login) => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `http://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
  //     );
  //     setRepos(res.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     showAlert("Error", "danger");
  //   }
  // };

  // const clearUsers = () => {
  //   setUsers([]);
  // };

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar title="Mansoor's App" icon="fab fa-twitter" />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Search
                    // searchUsers={searchUsers}
                    // clearUsers={clearUsers}
                    // showClear={users.length > 0}
                    // setAlert={showAlert}
                    />
                    <Users />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    // getUser={getUser}
                    // getUserRepos={getUserRepos}
                    // loading={loading}
                    // user={user}
                    // repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
