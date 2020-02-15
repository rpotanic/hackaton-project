import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import '../css/reset.css';
import '../css/main.scss'

import Route from '../route'; 
import Header from '../components/Header'


class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Route />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Application = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReactComponent)
);

export default hot(module)(() => <Application />);
