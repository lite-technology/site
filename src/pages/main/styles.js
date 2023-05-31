import styled from "styled-components";

export const Container = styled.div`

padding:  ${({theme}) => theme.sizes.containerPadding};
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: auto;
padding-top: 10vh;



`

export const SectionContainer = styled.section`

  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .text-container{
    display: flex;
    flex-direction:  column;

    width: 45%;
    justify-content: space-around;
    height: auto;
  }
  .image-container{


    height: auto;
    width: 45%;
    animation: floating 5s ease-in-out infinite;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
  }

  .image{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;

&:nth-child(1){

  animation: blinkImage 0.85s ease-in-out  infinite;
}



img{

width: 65%;
height: 65%;
    }
  }

  @keyframes blinkImage {
        from {
         opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }      
  }

  .text-container > h1{
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 900;
  }

  .text-container > h1{

        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 5s steps(25),
          blink 800ms steps(20) infinite normal;
        border-right: 2px solid ${({theme}) => theme.colors.primary};
      }
      @keyframes typewriter {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }


      }
      @keyframes blink {
        from {
          border-color: ${({theme}) => theme.colors.primary};
        }
        to {
          border-color: transparent;
        }
      }
  .text-container > p{
    width: 95%;
    color: ${({theme}) => theme.colors.secondaryText};

font-size: 14px;
font-weight: 500;
  }

  .circles{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .span{

    border-radius: 50%;
    width: 0;
    height: 0;
    display: flex;
    position: absolute;
animation: opacity 3.5s infinite ease-in-out;
    background-color: ${({theme}) => theme.colors.primary};
    &:nth-child(2){
      animation-delay:0.5s;
    }
    &:nth-child(3){
      animation-delay: 1.5s;
    }
    &:nth-child(4){
      animation-delay: 2.5s;
    }


  }

  @keyframes opacity{
    0%{
      opacity: 0.01;
      width: 0;
      height: 0;
    }
    
    70% {
      opacity: 0.03;
      width: 120vh;
      height: 120vh;
    }

    100% {
      opacity: 0;
      width: 110vh;
      height: 110vh;
    }
    
  }


`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 3px;
    font-weight: 900;
    letter-spacing: 1.5px;
  }
  h3{
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 16px;
  }
`

export const ServiceContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 85vh;
width: 100%;
.cards {
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}


.card {
  width: 215px;
  height: 285px;
  background: ${({theme}) => theme.colors.secondaryBackground};;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;
  position: relative;
  padding: 5px;
  margin: 0 5px;
}

.card .imgClass {
  height: 45%;
  position: absolute;
  transition: 0.2s ease-in-out;
  z-index: 1;
}

.textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}

.textBox .text {
  font-weight: bold;
  text-align: center;
}

.textBox .head {
  font-size: 20px;
  text-align: center;

}

.textBox button {
  background-color: ${({theme}) => theme.colors.primary};
  padding: 5px 10px;
  border-radius: 5px;
  inset: unset;
  border: none;
  color: ${({theme}) => theme.colors.text};
  letter-spacing: 1.1px;
  font-weight: 500;
  transition: 0.2s ease-in-out;
a{
  text-decoration: none;
}

}

.textBox button:hover {
  filter: brightness(1.1);
}
.textBox span {
  font-size: 12px;
  color: lightgrey;
  text-align: center;
}

.card:hover .textBox {
  opacity: 1;
}

.card:hover .imgClass {
  height: 65%;
  filter: blur(5px) opacity(0.2);
  animation: anim 3s infinite;
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.01) rotate(-1deg);
}
`

export const Information= styled.div`
  display: flex;
  flex-direction: ${props => (props.inverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 85vh;
  width: 100%;
  .text-container, .image-container{
    flex: 1;
  text-align: ${props => (props.inverse ? 'right' : 'left')};
  height: 100%;
  width: 45%;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  }
  p{
    text-align: center;
  }
  img {
    width: 60%;
    height: auto;
  }
  .image-container{
    width: 40%;
    justify-content: ${props => (!props.inverse ? 'flex-end' : 'flex-start')};
  }

`;

