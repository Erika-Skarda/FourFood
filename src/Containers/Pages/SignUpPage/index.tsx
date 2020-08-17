import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import * as UserAction from '../../../Actions/actions';
import { routes } from "../../../Containers/Router";

import Section from "../../../Components/HeaderInput";
import {Container, Form, TextFieldStyled, SectionTitle } from "../../../Components/HeaderInput/styled";
import Button from "../../../Components/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
 import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

interface SignUpProps {
  
}
interface User {
  email: string
  password: string
  
  
}
const SignUp: React.FC<SignUpProps> = () => {

  //SENHA ************************************
  const [values, setValues] = React.useState({

    showPassword: false,

  });
  const [values2, setValues2] = React.useState({

    showPassword2: false,

  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirmPassword = () => {
    setValues2({ ...values2, showPassword2: !values2.showPassword2 });
  };
  
  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };
//****************************************************** */
const createNewUser = [
  {
    name: "name",
    label: "Nome",
    placeholder: "Nome e sobrenome",
    type: "text",
    required: true,
    pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
    title: "O nome deve conter apenas letras ou números, no mínimo de 3"
  },
  {
    name: 'email',
    label: "Email",
    placeholder: "email@email.com",
    type: "email",
    required:true,
    pattern:"[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$",
    title: "Campo obrigatório"
  },
  {
    name:"cpf",
    type:"text",
    placeholder:"000.000.000-00",
    label:"CPF",
    required:true,
    title:"Digite um CPF no formato: xxx.xxx.xxx-xx",
    pattern:"\d{3}\.\d{3}\.\d{3}-\d{2}" 
    
  },
  {
    name: 'password',
    label: "Senha",
    type: values.showPassword? 'text' : 'password',
    placeholder: "Mínimo 6 caracteres",
    pattern:"[A-Za-z0-9]{6,10}",
    title: "Digite no mínimo 6 caracteres",
      endAdornment: 
      <InputAdornment position="end">
            <IconButton
                aria-label = "Toggle password visibility"
                onClick = {handleClickShowPassword}
                onMouseDown = {handleMouseDownPassword}
                edge = "end"
                >
              {values.showPassword? 
              <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
  },
  {
    name: 'confirm',
    label: "Confirmar",
    type: values.showPassword? 'text' : 'password',
    placeholder: "Confirme a senha anterior",
    pattern: "[A-Za-z0-9]{6,10}",
    title: "Digite no mínimo 6 caracteres",
    endAdornment: 
    <InputAdornment position="end">
        <IconButton
            aria-label = "Toggle password visibility"
            onClick = {handleClickShowConfirmPassword}
            onMouseDown = {handleMouseDownPassword}
            edge = "end"
            >
          {values.showPassword? 
          <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
  }
]
const dispatch = useDispatch()
const [formState, setFormInfo] = useState({
  form: {
    name: "",
    email : "",
    cpf: "",
    password : "",
    confirm:""
  }

})

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormInfo({ ...formState,
     [name]: value 
    })
}
const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if(formState.form.password != formState.form.confirm) {
        alert("Senhas divergentes. Tente novamente")

  } else {
    // dispatch(UserAction.singUp(
    //   formState.form.name,
    //   formState.form.email, 
    //   formState.form.cpf
    //   formState.form.password, 
    //   formState.form.confirm)
  }
 
}
//   const newUser = () => {
   
//     const [userName, setUserName] = useState<User>()

//     useEffect(() => {
     
//         const name  = localStorage.getItem("userName")
      
//         setUserName(name)
//     }, [ userName])

//     return {
     
//         userName
//     }
// }

  return (
    <Container>
      <Section title="Cadastrar"/>

      <Form onSubmit={handleOnSubmit}>
         {createNewUser.map(field => (
            <TextFieldStyled
              key={field.name}
              name={field.name}
              type={field.type}
              value={formState.form.name || ""} // N sei
              placeholder={field.placeholder}
              label={field.label}
              required 
              onChange={handleChange}

              variant="outlined"
              InputLabelProps= {{ shrink: true }}

              InputProps={{
                endAdornment: field.endAdornment,
                  inputProps: {
                    pattern: field.pattern,
                            title: field.title
                        }
                  }}
            />
        ))}
       <Button title= "Cadastrar"></Button>
      </Form>

    </Container>
  )
}
 
export default SignUp;