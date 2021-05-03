import { useState, useEffect } from 'react';

import sanityClient from 'sanityClient';
import { Main, RoundedImage, Bio, StyledSocialIcon, Description, FlexContainer, DescriptionSVG } from './About.styles';
import Loading from 'UI/Loading/Loading';
import description from 'assets/description.svg';

interface AboutData {
  name: string;
  imageUrl: string;
  bio: string;
  whatIDo: string;
  socialLinks: string[];
}


const About = () => {
  const [aboutData, setAboutData] = useState<AboutData>();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "about"][0]{
      name,
      "imageUrl": image.asset->url,
      bio,
      whatIDo,
      socialLinks
    }`)
      .then(((data: AboutData) => setAboutData(data)))
      .catch(err => console.log(err))
  }, [])

  if (typeof aboutData === "undefined" || showLoadingScreen) {
    setTimeout(() => setShowLoadingScreen(false), 1250);
    return <Loading />
  }

  return (
    <>
    <Main>        
      <RoundedImage src={aboutData.imageUrl} alt="My picture" />
      <section>
        <Bio>{aboutData.bio}</Bio>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {aboutData.socialLinks.map(site => <StyledSocialIcon key={site} url={site} fgColor="white" />)}
        </div>
      </section>
    </Main>
    <Description>
      <h2>What I do?</h2>
      <FlexContainer>
        <p>
          {aboutData.whatIDo} 
        </p>
        <DescriptionSVG src={description} alt="Illustration of what I do."/>
      </FlexContainer>
    </Description>
    </>
  )
}

export default About;