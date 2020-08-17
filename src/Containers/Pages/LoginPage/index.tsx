import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Push, push } from 'connected-react-router';
import { useHistory } from "react-router-dom";

import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import * as UserAction from '../../../Actions/actions';
import { routes } from "../../../Containers/Router";
//Estilização
import { DivTitle } from "./styled";
import Section from "../../../Components/HeaderInput";
import {Container, Form, TextFieldStyled, SectionTitle } from "../../../Components/HeaderInput/styled"
import Button from "../../../Components/Button"
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
 import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


interface Props {
  
}
const Login: React.FC<Props> = (props) => {

const [state , setState] = useState({
   form: {
    email : "",
    password : ""
  }
})

//Funções para senha
// const [hidenPassword, setHidenPassword] = useState(false)


const [values, setValues] = React.useState({

  showPassword: false,
});

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event:any) => {
  event.preventDefault();
};

//Dispatch e History oara redirecionamento
const dispatch = useDispatch()

let history = useHistory();

function redirectSignUpFunction() {
  // dispatch(push(routes.signup))
  //  dispatch(Push("/signup"))
  history.push('/signup')
}
//OnChange
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const {name , value} = e.target   
  setState(prevState => ({
    ...prevState,
    [name] : value
 }))
 }
//OnSubmit Form
function onSubmit(e: FormEvent<HTMLFormElement>) {
     e.preventDefault()
    dispatch(UserAction.login(state.form.email, state.form.password))
 }

    return (
      
      <Container>
          < Section title="Entrar" />
        
                <Form onSubmit={onSubmit}>
               
                  <TextFieldStyled   
                    name = "email"
                    type = "email"
                    value = {state.form.email || ""}
                    placeholder = "email@email.com"
                    label = "E-mail"
                    required
                    title = "Preencha corretamente"
                    // pattern =  "[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
                    onChange={handleChange}

                      variant="outlined"
                      InputLabelProps = {{shrink:true}}   
                  />
                  <TextFieldStyled
                    name = "password"
                    type = {values.showPassword? 'text' : 'password'}
                    value = {state.form.password || ""}
                    placeholder = "Mínimo 6 caracteres"
                    label = "Senha"
                    title = "Digite no mínimo 6 caracteres"
                    required
                    // pattern = "[A-Za-z0-9]{6,10}"
                    onChange={handleChange}

                    variant = "outlined"
                    id =" outlined-adornment-password"
                    InputLabelProps = {{shrink:true}}  
                    InputProps={{
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                              aria-label="Toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"

                          >
                            {values.showPassword? 
                            <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                    }}
               
                  />
                  <Button title="Entrar"/>
             
                </Form>
          
                <DivTitle>
                    <SectionTitle>
                      Não possui cadastro? <strong style = {{color:"#e8222e",
                      cursor:"pointer"}} onClick={redirectSignUpFunction}>
                      Clique aqui.</strong>
                    </SectionTitle>
                </DivTitle>
      </Container>

    )

}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  bindActionCreators(UserAction, dispatch);
};
      
export default connect(mapDispatchToProps, null)(Login);




