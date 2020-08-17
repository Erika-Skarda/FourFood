import styled from 'styled-components'
import { TextField } from '@material-ui/core';
import { jsx, css, keyframes } from '@emotion/core';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const Logo = styled.img `
 
    height: 3.625rem;
    object-fit: contain;
    margin-top: 5.5rem;
    animation: ${bounce} 1s ease infinite;
`
export const SectionTitle = styled.h2 `

  font-size: 1rem;
  margin-bottom:1.25rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top:1.75rem;
  text-align: center;

` 

export const StyledSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

`
//Container
export const Container = styled.div `
 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background-color: "white";
`
// FORM
export const Form = styled.form `
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
  gap:1rem;
  align-items:center;
  justify-content:flex-start;
  margin-top:0.75rem;
`
export const TextFieldStyled = styled(TextField) `
  width: 20.5rem;
  height: 3.5rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin: 1em;
`