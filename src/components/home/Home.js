import "./Home.css"
import InfoItem from "./InfoItem/InfoItem"
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Resume } from '../../assets/resume.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Copy } from '../../assets/copy2.svg'
import { useState } from "react"
import profilePicture from '../../assets/naruebes-for-web.jpg'

const Home = ({ theme }) => {
  const [alertCopy, setAlertCopy] = useState(false);
  const copyEmail = async () => {
    const myEmail = "naruebes.phudeth@gmail.com"
    await navigator.clipboard.writeText(myEmail);

    setAlertCopy(true);
    setTimeout(() => {
      setAlertCopy(false)
    }, 1000);
  }

  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="home-left">
          <div className="home-text">
            <h1>Hi, I'm Naruebes</h1>
            <h2 className="home-job">Web Developer.</h2>
          </div>

          <div className="info-items">
            <InfoItem
              theme={theme}
              Icon={Email}
              link={"mailto:naruebes.phudeth@gmail.com"}
              title="Email"
            />
            <InfoItem
              theme={theme}
              Icon={Resume}
              link={require("../../assets/naruebes-resume.pdf").default}
              title="Resume"
            />
            <InfoItem
              theme={theme}
              Icon={Github}
              link={"https://github.com/naruebes-dearw"}
              title="Github"
            />
          </div>

          <div className="email-container">
            <button
              onClick={() => { copyEmail() }}
              className={`btn-email btn-shadow ${theme}`}
            // onTransitionEnd={() => setAlertCopy(false)}
            >
              <p id="my-email">naruebes.phudeth@gmail.com</p>
              <i className="icon-email-container">
                <Copy />
              </i>
            </button>

            <div className={`alert-copy-container ${alertCopy && "show-alert"}`}>
              <p className="alert-copy">✔ Copied to clipboard</p>
            </div>
          </div>

        </div>

        <div className="home-right">
          <div className={`photo-box outter-shadow ${theme}`}>
            <div>
              <img src={profilePicture}
                alt="profile picture"
                className={`profile-picture ${theme}`} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
