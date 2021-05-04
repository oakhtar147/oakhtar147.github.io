import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import Header from 'UI/Header/Header';
import contactSVG from 'assets/contact.svg'
import sanityClient from 'sanityClient';
import Loading from 'UI/Loading/Loading';
import { Container, ContactSocialIcon, Section } from './Contact.styles';
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
    <div style={{ minHeight: "100vh" }}>
      <Header svgUrl={contactSVG} title="Reach me out!" description={contactData.description} />
      <Fade bottom>
        <Container>
          <Section>
            <h2>Email me</h2>
            <ContactForm />
          </Section>
          <Section>
            <h2>Social Media</h2>
            {contactData.aboutData.socialLinks.map(site => <ContactSocialIcon key={site} url={site} fgColor="white" />)}
          </Section>
        </Container>
      </Fade>
    </div>
  )
}

export default Contact;
