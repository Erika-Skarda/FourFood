import styled, { createGlobalStyle, css} from "styled-components";


interface Props {
    theme: string;
}

export const GlobalStyle = createGlobalStyle(

    (props: Props) => css`
        :root {
            
            --color-dark: hsl(0, 0%, 10%);
            --color-light: hsl(0, 0%, 95%);
            --black: "black";
            --lipstick: "#e8222e";
           
        }

        body {
    
        /* transition: all 0.25s linear; */
        margin: 0;
        padding: 0;
        font-family:'Roboto', sans-serif;

        }
        html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
        
    
    *{
        padding: 0;
        margin : 0;
        box-sizing: border-box;
        font-size: 16px;
    };
    
    @font-face {
        font-family: 'Roboto', sans-serif;
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    }
    
    button {
        cursor: pointer;
    };
    
    `,
);
  
export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;