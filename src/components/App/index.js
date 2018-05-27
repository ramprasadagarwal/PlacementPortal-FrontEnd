import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/header';
import Welcome from '../Welcome/welcome';
import EditProfile from '../EditProfile/editprofile';
import CompanyForm from '../CompanyForm/companyform';
// import Company from '../Company/company';
import Promote from '../Promote/promote';
import Dashboard from '../Dashboard/dashboard';
import StudentProf from '../StudentProf/studentprof';
import FinalProf from '../FinalProf/finalprof';
const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/newcompany" component={CompanyForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard1" component={Dashboard} />
      <Route exact path="/profile" component={StudentProf} />
      <Route exact path="/promote" component={Promote} />
      <Route exact path="/final" component={FinalProf} />
    </Switch>
  </div>
);


export default withRouter(App);
