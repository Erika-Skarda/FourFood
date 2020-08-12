import React, { Component, Fragment } from "react"
import { connect } from"react-redux"
import { push } from "connected-react-router";
import { routes } from "../../Router/index";
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components'

const WrapperSplashScreen = styled.div `
    background-color:#e8222e;
    height:100vh;
    display:flex;
    justify-content:center;
`
class SplashScreen extends React.Component {

    componentDidMount() {

        window.setTimeout(this.props.goToLogin, 3000);
    }

render() {
   
    return (
     <Fragment>
         <Fade in={true} timeout={1000}>
             <WrapperSplashScreen>
                   <img src={require( '../../../Assets/Images/logo_branca.svg')} 
                        alt="logo da FourFood" 
                     />
             </WrapperSplashScreen>
         </Fade>
     </Fragment>
    )
}
} 
 const mapDispatchToProps = (dispatch: (arg0: import("connected-react-router").CallHistoryMethodAction<[any]>) => any) => ({
   
     goToLogin: () => dispatch(push(routes.login)),
   
 })


 export default connect(mapDispatchToProps, null)(SplashScreen)