import { useState, useEffect } from 'react'

import Header from 'UI/Header/Header';
import contactSVG from 'assets/contact.svg'
import sanityClient from 'sanityClient';
import Loading from 'UI/Loading/Loading';
import { Container, ContactSocialIcon } from './Contact.styles';

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

  console.log(contactData);
  return (
    <>
      <Header svgUrl={contactSVG} title="Reach me out!" description={contactData.description} />
      <Container>
        <h2>Social Media</h2>
        {contactData.aboutData.socialLinks.map(site => <ContactSocialIcon url={site} fgColor="white" />)}
      </Container>
    </>
  )
}

export default Contact
