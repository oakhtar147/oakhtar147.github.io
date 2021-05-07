import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import Header from 'UI/Header/Header';
import contactSVG from 'assets/contact.svg'
import sanityClient from 'sanityClient';
import Loading from 'UI/Loading/Loading';
import { Container, SubSection, ContactSocialIcon, Section } from './Contact.styles';
import ContactForm from './Form/Form';

interface ContactData {
  title: string;
  description: string;
  aboutData: { socialLinks: string[] }
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData>();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "contact"][0]{
      title,
      description,
      "aboutData": *[_type == 'about' && references(^._id)][0]{
        socialLinks,
      }
    }`).then((res: ContactData) => setContactData(res))
       .catch(err => console.log(err)) 
  }, [])

  if (typeof contactData === "undefined" || showLoadingScreen) {
    setTimeout(() => setShowLoadingScreen(false), 1700);
    return <Loading />
  }

  return (
    <Container>
      <Header svgUrl={contactSVG} title={contactData.title} description={contactData.description} />
      <Fade bottom>
        <Section>
          <SubSection>
            <h2>Email me</h2>
            <ContactForm />
          </SubSection>
          <SubSection>
            <h2>Social Media</h2>
            {contactData.aboutData.socialLinks.map(site => <ContactSocialIcon key={site} url={site} fgColor="white" />)}
          </SubSection>
        </Section>
      </Fade>
    </Container>
  )
}

export default Contact;
