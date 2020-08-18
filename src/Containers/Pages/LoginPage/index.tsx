import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as UserAction from '../../../Actions/actions';

//Estilização
import { DivTitle } from "./styled";
import Section from "../../../Components/HeaderInput";
import { Container, Form, TextFieldStyled, SectionTitle } from "../../../Components/HeaderInput/styled";
import Button from "../../../Components/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

interface Props {
  
}

type Person = {

  email: string;
  password: string;
};

const Login: React.FC<Props> = (props) => {

  //Funções para senha
  const [values, setValues] = React.useState({
  
    showPassword: false,
  
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };
 //Função para state
//  const { register,  handleSubmit } = useForm<Person>()

const [state , setState] = useState({

    email : "",
    password : ""
  
});
 //OnSubmit Form
 const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(UserAction.login(
      state.email, 
      state.password)
    )   
  }
  //OnChange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name , value} = e.target   
    setState(prevState => ({
      ...prevState,
      [name] : value
    }))
  }
//Dispatch e History oara redirecionamento
const dispatch = useDispatch()

let history = useHistory();

function redirectSignUpFunction() {
 
    history.push('/signup')
  }

    return (
      
      <Container>
          < Section title="Entrar" />
                <Form onSubmit={onSubmit}>
                  <TextFieldStyled   
                    name = "email"
                    type = "email"
                    value = {state.email || ""}
                    placeholder = "email@email.com"
                    label = "E-mail"
                    required
                    title = "Preencha corretamente"
                    // pattern =  "[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
                    onChange={handleChange}
                    // ref={register}
                    variant="outlined"
                    InputLabelProps = {{shrink:true}}   

                      
                  />
                  <TextFieldStyled
                    name = "password"
                    type = {values.showPassword? 'text' : 'password'}
                    value = {state.password || ""}
                    placeholder = "Mínimo 6 caracteres"
                    label = "Senha"
                    title = "Digite no mínimo 6 caracteres"
                    required
                    // pattern = "[A-Za-z0-9]{6,10}"
                    onChange={handleChange}
                    // ref={register}
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
     
export default Login;




