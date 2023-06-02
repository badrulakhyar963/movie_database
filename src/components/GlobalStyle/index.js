import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 //CSS RESET'
 @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

 body {
        font-family: 'Pangolin', cursive;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
      /* CSS Reset */
      * {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
      }    
`;
export default GlobalStyle;