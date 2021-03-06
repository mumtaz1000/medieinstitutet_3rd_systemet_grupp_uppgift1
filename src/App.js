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
import CreateProduct from '../src/pages/CreateProduct'
//import PrivateRoute from './router/PrivateRoute'
import AdminRoute from "./router/AdminRoute"
import Users from './pages/Users';
import Products from './pages/Products'
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
        <AdminRoute exact  path="/users" component={Users} />
        <Route exact path="/createproduct" component={CreateProduct} />
        <Route exact path="/products" component={Products} />

            </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;


