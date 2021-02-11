import React from "react";
import { Navbar, Alert, About } from "./components/layouts";
import { Users, Search } from "./components/users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/users/User";

//Redux 
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar title="Github App" icon="fab fa-twitter" />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Search/>
                    <Users />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                path="/user/:login"
                render={(props) => (
                  <User {...props}/>
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
