import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import * as UserAction from '../../../Actions/actions';
import Fade from '@material-ui/core/Fade';
import { WrapperSplashScreen } from './styled';

interface SplashScreenProps {
  redirectLogin: () => void;
}
const SplashScreen: React.FC<SplashScreenProps> = (props) => {

  const componentDidMount = () => {
    window.setTimeout(props.redirectLogin, 3000);
  };

  return (
    <Fragment>
      <Fade in timeout={1000}>
        <WrapperSplashScreen>
          <img
            src={require('../../../Assets/Images/logo_branca.svg')}
            alt="logo da FourFood"
          />
        </WrapperSplashScreen>
      </Fade>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  bindActionCreators(UserAction, dispatch);
};
export default connect(mapDispatchToProps, null)(SplashScreen);
