import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import * as UserAction from '../../../Actions/actions';



interface Login {
  redirectLogin: () => any;
}
const LoginPage: React.FC<Login> = () => {

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    bindActionCreators(UserAction, dispatch);
  };
  
  export default connect(mapDispatchToProps, null)(LoginPage);
  