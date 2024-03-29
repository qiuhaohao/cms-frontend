import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import AuthForm from './AuthForm'

import { Redirect } from "react-router-dom";

import { isLoggedIn } from '../auth/redux/selectors'



export class PageAuth extends Component {
  static propTypes = {
    login: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return this.props.isLoggedIn
      ? <Redirect to="/"/> 
      : (
        <div className="auth-page-auth">
          <div className="auth-page-auth-title">Login</div>
          <AuthForm redirect={() => {this.props.history.push("/")}}/>
        </div>
      );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    login: state.login,
    isLoggedIn: isLoggedIn(state)
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageAuth);
