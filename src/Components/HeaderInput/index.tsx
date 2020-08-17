import React , {Fragment}from 'react';
import { Logo, StyledSection, SectionTitle } from './styled';
import logo from "../../../src/Assets/Images/logo_vermelha.svg";

interface Props {

  title:string

}

const Section = (props: Props) => {
  return (
    <StyledSection>
        <Logo src = {logo}/>
        <SectionTitle>
           {props.title}
        </SectionTitle>
    </StyledSection>


  )

    }

export default Section;