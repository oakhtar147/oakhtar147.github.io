import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { Head, Container, PageSVG } from './Header.styles' 

interface Props {
  svgUrl: string;
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ svgUrl, title, description }) => (
  <Head>
    <Zoom>
      <Container>
        <PageSVG src={svgUrl} />
      </Container>
    </Zoom>
    <Fade right>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </Fade>
  </Head>  
);


export default Header;