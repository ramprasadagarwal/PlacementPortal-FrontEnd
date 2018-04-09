import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/header';
import Welcome from '../Welcome/welcome';
import EditProfile from '../EditProfile/editprofile';
import Company from '../Company/company';
import Promote from '../Promote/promote';
// import NotFound from '../NotFound404';
// import './index.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/promote" component={Promote} />
      {/* <Route path="*" exact component={NotFound} /> */}
    </Switch>
  </div>
);


export default withRouter(App);
