import "./About.css"

const About = ({ theme }) => {
  return (
    <div className={`about ${theme}`} id="about">
      <h1>About Me</h1>

      <div className={`about-body outter-shadow ${theme}`}>
        <p>I am a Web Developer who passionate in both font-end and back-end web development.</p>
        <h2>Skills</h2>
        <p>ReactJS, NodeJS, ExpressJS, MongoDB, JavaScript, HTML, CSS</p>
        <h2>Others</h2>
        <p>Github, Figma, Photoshop</p>
      </div>
    </div>
  )
}

export default About
