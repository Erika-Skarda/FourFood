import React from "react";
import { ButtonStyled } from "./styled";

interface Props {

  title: string
}

const Button = (props:Props) => {

    return(
       
       <ButtonStyled type="submit">           
         
         {props.title}
    
       </ButtonStyled>
       
    )

};

export default Button;