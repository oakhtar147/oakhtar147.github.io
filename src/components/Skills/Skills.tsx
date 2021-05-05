import { useState, useEffect } from 'react';

import SkillCloud from './SkillCloud/SkillCloud.js';
import { Container } from '../Contact/Contact.styles';
import Loading from 'UI/Loading/Loading'
import sanityClient, { urlFor } from 'sanityClient';

interface SkillsData {
  description: string;
  skillsData: { tools: { asset: string }[] }
}

const Skills = ()  => {
  const [skillsData, setSkillsData] = useState<SkillsData>();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "skills"][0]{
      description,
      "skillsData": *[_type == "about" && references(^._id)][0]{
        tools,
      }
    }
    `).then((res: SkillsData) => setSkillsData(res))
      .catch(err => console.log(err))
  }, [])  

  
  if (typeof skillsData === "undefined" || showLoadingScreen){
    setTimeout(() => setShowLoadingScreen(false), 1700);
    return <Loading />
  }

  const toolsImages = skillsData.skillsData.tools.map(tool => urlFor(tool.asset).url())

  return (
    <Container>
      <SkillCloud toolsImages={toolsImages} />
    </Container>
  )
}

export default Skills;
