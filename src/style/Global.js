import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
  background-color:rgb(25, 25, 25) ;
} 
ol , ul{
  list-style: none;
}
a{
    text-decoration:none;
    padding:0;
    margin:0;
}
`

export default GlobalStyle;