import React from 'react'
import './App.css';
import './firebase/config'
import Signup from './pages/Signup'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import {UserProvider} from './firebase/UserProvider'
import Profile from './pages/Profile';
import Header from "./Header"
import Login from './pages/Login'
import ProfileRedirect from './router/ProfileRedirect';
//import PrivateRoute from './router/PrivateRoute'
function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <div>
      <Header />
      <div className="app">
        <div className="ui grid container">
        <Switch>
        <Route exact path="/">
                <Redirect to="/login" />
        </Route>
        <ProfileRedirect exact path="/signup" component={Signup} />
        <Route exact path="/profile/:id" component={Profile} />
        <ProfileRedirect exact path="/login" component={Login} />
            </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;


