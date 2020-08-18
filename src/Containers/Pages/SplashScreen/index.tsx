import React, { Fragment, useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { push} from 'connected-react-router';
import { WrapperSplashScreen } from './styled';
import { useHistory } from "react-router-dom";

function SplashScreen() {


  let history = useHistory();

  useEffect(() => {

    setTimeout(() =>  history.push('/login'), 3000);

  }, []);

  return (
    <Fragment>
    
        <WrapperSplashScreen>
          <img
            src={require('../../../Assets/Images/logo_branca.svg')}
            alt="logo da FourFood"
          />
        </WrapperSplashScreen>
     
    </Fragment>
  );
};

export default SplashScreen
