import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    flex-direction: column;
    min-height: 100vh;
    display: flex;
    height: auto;
    width: 100%;

`

export const ImageContainer = styled.div`
margin-top: 2.5%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: auto;
    width: 100%;

.container{
background-color: ${({theme}) => theme.colors.secondaryBackground};
border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid rgba(255,255,255,0.05);
    width: 190px;
    height: 190px;

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

width: 140px;
height: 140px;
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
`

export const LinksContainer = styled.div`
    flex-direction: column;
    display: flex;
    height: auto;
    width: 100%;
    padding: 5% 10%;

`

export const Card = styled.a`
background-color: ${({theme}) => theme.colors.secondaryBackground};
padding: 20px;
border-radius: 5px;
margin-top: 10px;
text-decoration: none;
inset: unset;
border: 0.1px solid ${({theme}) => theme.colors.secondaryBackground};
justify-content: center;
align-items: center;
display: flex;
font-weight: 500;
letter-spacing: 1px;

&:hover{
    border: 0.1px solid rgba(255,255,255,0.05);
    filter: brightness(1.05);
}
 
`