import React from 'react';
import raio from '../../assets/imgs/animation/raio.svg'
import corpo from '../../assets/imgs/animation/corpo.svg'




import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import { Container, SectionContainer, ServiceContainer, TitleContainer, Information} from './styles';
import { serviceData, informationData } from './config';
const ServiceCard = ({ image, title, description, url }) => {
  return (
    <div className="card">
      <img className="imgClass" src={image} alt="Lite technology" />
      <div className="textBox">
        <p className="text head">{title}</p>
        <span>{description}</span>
        
      </div>
    </div>
  );
};
//<button><a  href={url ? url : "/"}>ver mais</a></button>
const InformationContainer = ({ inverse, text, Img }) => (
  <Information inverse={inverse}>
    <div class="text-container">
      <p>{text}</p>
    </div>
    <div class="image-container">
      <img src={Img} />
    </div>
  </Information>
);




const Main = () => {

    return (
        <>
            <Navbar />
            <Container>
               <SectionContainer>
                <div class="text-container">
                    <h1>A inovação na velocidade que você precisa!</h1>
                    <p>Acelere sua empresa rumo ao sucesso com inovação de alta qualidade, elevando seu negócio a novos patamares de conquistas. Despertando potencial em busca de resultados extraordinários.</p>
                </div>
                 <div class="image-container">
                  <div className="image raio">
                    <img src={raio} alt="raio" />
                  </div>
                  <div className="image">
                    <img src={corpo} alt="corpo" />
                  </div>
                 </div>
               </SectionContainer>
               {informationData.map((item, index) => (
                <InformationContainer
                  key={index}
                  inverse={index % 2 === 0} 
                  text={item.text}
                  Img={item.image}
                />
              ))}

               <ServiceContainer>
                <TitleContainer>
                  <h1>Serviços</h1>
                  <h3>*passe o cursor do mouse no card para ler*</h3>
                </TitleContainer>
                <div className="cards">
                    {
                      serviceData.map((card, index) => (
                          <ServiceCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                          />
                      ))
                    }
                </div>
               </ServiceContainer>


            </Container>
        </>
    )
}

export default Main

/**
 * 
 *      <div class="circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
 */