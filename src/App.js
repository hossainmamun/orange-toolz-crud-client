import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import FileUpload from "./Components/Dashboard/FileUpload.js";
import UserList from "./Components/Dashboard/UserList.js";
import Login from './Components/Home/Login.js';
import Register from "./Components/Home/Register.js";


export const globalUser = createContext()

function App() {
  const [userLogin, setUserLogin] = useState({})
  return (
    <globalUser.Provider value={[userLogin, setUserLogin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/userList">
            <UserList/>
          </Route>
          <Route path="/dashboard/registration">
            <Register />
          </Route>
          <Route path="/dashboard/file_upload">
            <FileUpload/>
          </Route>
        </Switch>
      </Router>
    </globalUser.Provider>
  );
}

export default App;
