import React from 'react'

import { ClickableProjectCard, Card } from './Project.styles'

interface Props {
  project: {
    title: string;
    description: string;
    link: string;
    type: string;
  }
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <ClickableProjectCard href={project.link}>
    <Card>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>Type: {project.type}</p>
    </Card>
    </ClickableProjectCard>
  )
}

export default Project
