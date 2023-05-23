import styled from "styled-components";

export const Container = styled.div`

padding:  ${({theme}) => theme.sizes.containerPadding};
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: auto;
padding-top: 10vh;


`

export const SectionContainer = styled.section`
.card {
  width: 195px;
  height: 285px;
  background: #313131;
  border-radius: 20px;
  ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;
}

.img {
  height: 30%;
  position: absolute;
  transition: 0.2s ease-in-out;
  z-index: 1;
}

.textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}

.textBox > .text {
  font-weight: bold;
}

.textBox > .head {
  font-size: 20px;
}

.textBox > .price {
  font-size: 17px;
}

.textBox > span {
  font-size: 12px;
  color: lightgrey;
}

.card:hover > .textBox {
  opacity: 1;
}

.card:hover > .img {
  height: 65%;
  filter: blur(7px);
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
  transform: scale(1.04) rotate(-1deg);
}


////////////////////
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

    width: 50%;
    justify-content: space-around;
    height: auto;
  }
  .image-container{
    display: flex;
    flex-direction: row;
    height: auto;
    width: 45%;
    justify-content: center;
    align-items: center;
    animation: floating 5s ease-in-out infinite;


  }
  .image-container > svg{
    height:100%;
    width: 100%;
    z-index: 5;
    background-color: aliceblue;
  }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }      
  }

  .text-container > h1{
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 900;
  }

  .text-container > h1{

        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 3.5s steps(20) infinite alternate,
          blink 800ms steps(13) infinite normal;
        border-right: 3px solid ${({theme}) => theme.colors.primary};
      }
      @keyframes typewriter {
        0% {
          width: 0%;
        }
        95% {
          width: 101%;
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
    color: ${({theme}) => theme.colors.secondaryText};

font-size: 15px;
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
  span{

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