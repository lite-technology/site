
import styled from 'styled-components'

export const Container = styled.header`
  ${({theme}) => theme.row}
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid rgba(20, 132, 193, 0.2);

  padding: 0 ${({theme}) => theme.sizes.containerPadding};
  justify-content: space-between;
  position: fixed;

z-index: 10;


  .subContainer > div {
    width: auto;
    height: 100%;
    display: flex;
   
    align-items: center;
  }
  .subContainer > div > img {
    width: auto;
    height: 40%;
  }

  .subContainer{
    ${({theme}) => theme.row}
    height: 100%;
    width: auto;
    justify-content: space-between;
    align-items: center;
  }

  .links > a > svg {
    margin-left: 10px;
    color: ${({theme}) => theme.colors.text};

    &:hover{
      color: ${({theme}) => theme.colors.primary};
      opacity: 0.85;
      transform: rotate(-10deg) scale(1.1);
      transition: 0.35s;
      
    }
  }

  img {
    &:hover{
      transition: 0.2s;
    }
  }
  `

