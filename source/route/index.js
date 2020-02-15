// @flow
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/main'
import PersAreaPage from '../pages/personalArea'
import RegistrationPage from '../pages/registration'

class AppRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          component={MainPage}
          exact
          path='/'
        />
        <Route
          component={PersAreaPage}
          exact
          path='/lk'
        />
        <Route
          component={RegistrationPage}
          exact
          path='/registration'
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatchEvent => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRoute)
);
