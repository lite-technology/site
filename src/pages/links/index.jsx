import React from 'react';
import corpo from '../../assets/imgs/links/corpo.svg';
import raio from '../../assets/imgs/links/raio.svg';
import { data } from './config';

import { Container, LinksContainer, ImageContainer, Card, TitleContainer} from './styles';

const Links = () => {

    return (
        <Container>
            <a href="/">
            <ImageContainer>
                  <div className="container">
                    <div className="image raio">
                        <img src={raio} alt="raio" />
                    </div>
                    <div className="image">
                        <img src={corpo} alt="corpo" />
                    </div>
                  </div>
            </ImageContainer>
            </a>
            <TitleContainer>
                <h1>Lite Technonology</h1>
                <h3>A inovação na velocidade que você precisa!</h3>
            </TitleContainer>
            <LinksContainer>
                {
                    data.map((x,i) => {
                        return (
                            <Card target='_blanck' href={x.url} key={i}>{x.text}</Card>
                        )
                    })
                }

            </LinksContainer>

        </Container>
    )
}

export default Links