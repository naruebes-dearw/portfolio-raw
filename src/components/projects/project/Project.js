import InfoItem from "./InfoItem/InfoItem";
import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as VisitWeb } from '../../../assets/visit-web.svg';
import "./Project.css";

const Project = (props) => {
  const {
    theme,
    title,
    imgUrl,
    gitHubUrl,
    projectUrl,
    projectDescption,
    technology
  } = props;
  return (
    <div className={`project outter-shadow ${theme}`}>
      <div className={`project-left ${theme}`}>
        <div className={`title ${theme}`}>
          <h2>{title}</h2>
          <div className={`links ${theme}`}>
            <InfoItem
              theme={theme}
              Icon={Github}
              link={gitHubUrl}
            />
            <InfoItem
              theme={theme}
              Icon={VisitWeb}
              link={projectUrl}
            />
          </div>
        </div>

        <div className={`img-container outter-shadow ${theme}`}>
          <a href={projectUrl} target="_blank">
            <img src={imgUrl} />
          </a>
        </div>
      </div>

      <div className={`project-right ${theme}`}>
        <p>{projectDescption}</p>
        <h2>Technology</h2>
        <p>{technology}</p>
      </div>
    </div>
  )
}

export default Project
