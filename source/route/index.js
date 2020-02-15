// @flow
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/main'

class AppRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          component={MainPage}
          exact
          path='/'
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
