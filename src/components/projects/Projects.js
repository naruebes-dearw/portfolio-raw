import Project from "./project/Project";
import "./Projects.css";
import projectList from "./projectList/projectList.js";

const Projects = ({ theme }) => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>

      {
        projectList.map(myProject => (
          <Project
            theme={theme}
            key={myProject.id}
            title={myProject.title}
            imgUrl={myProject.imgUrl}
            gitHubUrl={myProject.gitHubUrl}
            projectUrl={myProject.projectUrl}
            projectDescption={myProject.projectDescption}
            technology={myProject.technology}
          />
        ))
      }
    </div>
  )
}

export default Projects


{/* <Project
        theme={theme}
        title={`Facebook clone`}
        imgUrl={`https://image.freepik.com/free-vector/black-friday-sale-with-realistic-open-gift-background_1361-3646.jpg`}
        gitHubUrl={`https://github.com/naruebes-dearw`}
        projectUrl={`https://facebookcloneproject.herokuapp.com`}
        projectDescption={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis laoreet sem, non viverra mi vestibulum id. Donec sed pretium neque. Quisque in aliquet tellus.`}
        technology={`React, NodeJS, Express, PassportJS, MongoDB`}
      /> */}