import "./Contact.css"
import InfoItem from "./InfoItem/InfoItem";
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Resume } from '../../assets/resume.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Copy } from '../../assets/copy2.svg'
import { useState } from "react";

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertCopy, setAlertCopy] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlertMsg(true);
    setTimeout(() => {
      setAlertMsg(false);
    }, 2000);

    setName("");
    setEmail("");
    setMessage("");
  }

  const copyEmail = async () => {
    const myEmail = "naruebes.phudeth@gmail.com";
    await navigator.clipboard.writeText(myEmail);

    console.log("copy");
    setAlertCopy(true);
    setTimeout(() => {
      setAlertCopy(false);
    }, 1000);
  }
  return (
    <div className="contact" id="contact">
      <h1 align="center">Contact Me</h1>
      <div className="contact-body">
        <div className="contact-left">
          <p>Don't hesitate to reach me.</p>
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
              link={"https://google.com"}
              title="Resume"
            />
            <InfoItem
              theme={theme}
              Icon={Github}
              link={"https://github.com/naruebes-dearw"}
              title="Github"
            />
          </div>
        </div>

        <div className="contact-right">
          <div className="email-container">
            <button
              onClick={() => { copyEmail() }}
              className={`btn-email btn-shadow ${theme}`}
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
          <form onSubmit={handleSubmit}>

            <input
              className={`input ${theme}`}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              className={`input ${theme}`}
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email@example.com"
              required
            />
            <textarea
              className={`input ${theme}`}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Message..."
              rows="5"
              required
            ></textarea>
            <input
              className={`btn btn-shadow ${theme}`}
              type="submit"
              value="Send Message"
            />
            <p
              className={`alert-msg ${alertMsg && "show-alert-msg"}`}
            >Thank you for your submission!</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
