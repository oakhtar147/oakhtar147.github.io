import { useState, useEffect } from 'react';

import { Main, RoundedImage, Description, StyledSocialIcon } from './About.styles';
import myImage from 'assets/me.jpg';

interface Links {
  [socialMedia: string]: string
}

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    ;
  })

  const SocialLinks: Links = {
    GitHub: "https://github.com/oakhtar147",
    LinkedIn: "https://www.linkedin.com/in/osama-akhtar-25253a1a9/",
    Facebook: "https://www.facebook.com/OsamaXVI/",
    Instagram: "https://www.instagram.com/_osamaakhtar/",
    Twitter: "https://twitter.com/_osamaakhtar",
  }


  return (
    <Main>
      <RoundedImage src={myImage} alt="My picture" />
      <section>
        <Description>Hi! I am Osama Akhtar, a full-stack developer!</Description>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Object.keys(SocialLinks).map(site => <StyledSocialIcon url={SocialLinks[site]} fgColor="white" />)}
        </div>
      </section>
    </Main>
  )
}

export default About;