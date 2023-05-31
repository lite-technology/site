import React from 'react';

import corpo from '../../assets/imgs/links/corpo.svg';
import raio from '../../assets/imgs/links/raio.svg';
import { data } from './config';

import { Container, LinksContainer, ImageContainer, Card} from './styles';

const Links = () => {

    return (
        <Container>
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