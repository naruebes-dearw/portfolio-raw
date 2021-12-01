import "./Contact.css"
import InfoItem from "./InfoItem/InfoItem";
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Resume } from '../../assets/resume.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Copy } from '../../assets/copy2.svg'
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_3m98fhh";
const TEMPLATE_ID = "template_2kroxj9";
const USER_ID = "user_IwYml9sBhvBhxA59ujyM6";

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertCopy, setAlertCopy] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setAlertMsg(true);
        setAlertMsg(true);
        setTimeout(() => {
          setAlertMsg(false);
        }, 5000);

        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
        alert("Something went wrong! Can not sent message.")
      });

    // setAlertMsg(true);
    // setTimeout(() => {
    //   setAlertMsg(false);
    // }, 2000);

    // setName("");
    // setEmail("");
    // setMessage("");
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
          <p>Feel free to Contact me by submitting the form. I will get back to you as soon as possible.</p>
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
          <form ref={form} onSubmit={handleSubmit}>

            <input
              className={`input ${theme}`}
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              className={`input ${theme}`}
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email@example.com"
              required
            />
            <textarea
              className={`input ${theme}`}
              name="message"
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
