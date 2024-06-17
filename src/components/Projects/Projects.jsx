import React from 'react'
import "./Projects.css";
import { Button, Typography } from '@mui/material';



const ProjectCard=({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin=false,
})=>{
    return(
        <>
        <a href={url} className='projectCard' target='black'>
            <div>
                <img src={projectImage} alt='project'/>
                <Typography variant='h5'>{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>NGO WEBSITE</Typography>
                <Typography>{description}</Typography>
                <Typography variant='h6'>Tech Stack: {technologies}</Typography>
            </div>
        </a>
        {isAdmin && (
      <Button style={{ color: "white"}}>
        Delete
      </Button>
    )}
        </>
    )

}

const Projects = () => {
    const projects=[1];
  return (
    <div className='Projects'>
      <Typography variant='h3'>
        Projects
      </Typography>
      <div className='projectsWrapper'>
        {projects.map((project,index)=>(

            <ProjectCard
            url="https://ngo-wbag.vercel.app/"
            projectImage="https://www.generationsforpeace.org/wp-content/uploads/2019/11/12345-1080x675.jpg"
            projectTitle="Project"
            description="showcasing products"
            technologies="React"
            />
        ))}
      </div>
      <Typography variant='h3' style={{ font: "100 1.2rem 'ubuntu Mono'"}}>
        All The Projects Shown Above Are Made By Me 😊
      </Typography>
    </div>
  )
}

export default Projects;
