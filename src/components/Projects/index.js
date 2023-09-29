import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'unity-advanced' ?
            <ToggleButton active value="unity-advanced" onClick={() => setToggle('unity-advanced')}>Unity Advanced</ToggleButton>
            :
            <ToggleButton value="unity-advanced" onClick={() => setToggle('unity-advanced')}>Unity Advanced</ToggleButton>
          }
          <Divider />
          {toggle === 'unity-fundamentals' ?
            <ToggleButton active value="unity-fundamentals" onClick={() => setToggle('unity-fundamentals')}>Unity Fundamentals</ToggleButton>
            :
            <ToggleButton value="unity-fundamentals" onClick={() => setToggle('unity-fundamentals')}>Unity Fundamentals</ToggleButton>
          }
          <Divider />
          {toggle === 'cpp' ?
            <ToggleButton active value="cpp" onClick={() => setToggle('cpp')}>C++</ToggleButton>
            :
            <ToggleButton value="cpp" onClick={() => setToggle('cpp')}>C++</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects