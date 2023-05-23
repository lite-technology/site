import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Karla','Ubuntu', sans-serif;
 scroll-behavior: smooth;
 box-sizing: border-box;
}
p, a, h1 {
  color: ${({theme}) => theme.colors.text};
}
body {
  font-family: 'Karla','Ubuntu', sans-serif;
  background-color: #050505;
}
::-webkit-scrollbar-track {
    background-color: #363636;
}
::-webkit-scrollbar {
    width: 6px;
  
   
}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
}
`

export default GlobalStyle