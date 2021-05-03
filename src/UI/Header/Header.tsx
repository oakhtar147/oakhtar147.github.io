import React from 'react';

import { Head, Container, PageSVG } from './Header.styles' 

interface Props {
  svgUrl: string;
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ svgUrl, title, description }) => (
  <Head>
    <PageSVG src={svgUrl} />
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  </Head>  
);


export default Header;