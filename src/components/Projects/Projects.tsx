import { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';

import Header from 'UI/Header/Header'; 
import skillsSVG from 'assets/skills.svg'
import { Container, ProjectList } from './Projects.styles';
import Project from './Project/Project';
import sanityClient from 'sanityClient';
import Loading from 'UI/Loading/Loading';

interface ProjectsData {
  title: string;
  description: string;
  projects: { list: {
    title: string;
    description: string;
    link: string;
    type: string;
    _key: string;
    }[]
  }
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState<ProjectsData>();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "projects"][0]{
      title,
      description,
      "projects": *[_type == "about"  && references(^._id)][0]{
        "list": projects,
      }
    }`).then((res: ProjectsData) => setProjectsData(res))
       .catch(err => console.log(err))
  }, [])

  
  if (typeof projectsData === "undefined" || showLoadingScreen) {
    setInterval(() => setShowLoadingScreen(false), 1700);
    return <Loading />
  }

  return (
    <Container>
      <Header title={projectsData.title} description={projectsData.description} svgUrl={skillsSVG} />
      <ProjectList>
        {projectsData.projects.list.map(projectDetails => (
          <Zoom>
            <Project key={projectDetails._key} project={projectDetails} />
          </Zoom>
        ))}
      </ProjectList>
    </Container>
  )
}

export default Projects;