import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Home from './pages/home';
import logout from './pages/logout';
import Photos from './pages/photos';
import Songs from './pages/songs';
import Mind from './pages/mind';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home-main" component={Home} />
          <Route exact path="/logout" component={logout} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/mind" component={Mind} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
