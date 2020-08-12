import styled, { createGlobalStyle,
                 DefaultTheme,
                 css,
                 keyframes} from "styled-components";


interface Props {
    theme: string;
}

export  const GlobalStyle = createGlobalStyle(

    (props: Props) => css`
        :root {
            --color-dark: hsl(0, 0%, 10%);
            --color-light: hsl(0, 0%, 95%);
        }

        body {
        background-color: ${props.theme === "light"
            ? "var(--color-light)"
            : "var(--color-dark)"};
        color: ${props.theme === "light"
            ? "var(--color-dark)"
            : "var(--color-light)"};
            margin: 0;
            padding: 0;
            font-family:'Roboto', sans-serif;
        
            
            transition: all 0.25s linear;
        }
        
    
    *{
        padding: 0;
        margin : 0;
        box-sizing: border-box;
        font-size: 16px;
    };
    
    @font-face {
        font-family: 'Roboto', sans-serif;;
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    }
    
    
    body {
        
    };
    
    
    button {
        cursor: pointer;
    };
    
    `,
);
  
  