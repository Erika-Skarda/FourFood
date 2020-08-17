import React, { Fragment, useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { push} from 'connected-react-router';
import { WrapperSplashScreen } from './styled';

function SplashScreen() {

  let dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(push("/login")), 3000);
    // const timer = setTimeout(() => {
    //   console.log("vai arrombado")
    //   dispatch(push("/login"))
    // }, 1000)
    // return () => clearTimeout(timer)

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
