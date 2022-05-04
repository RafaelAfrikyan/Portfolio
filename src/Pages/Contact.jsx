import React from "react";
import githubIcon from "../assets/github-brands.svg";
import telegramIcon from "../assets/telegram-brands.svg";
import linkedinIcons from "../assets/linkedin-brands.svg";

export default function Contact({ contactRef }) {
  return (
    <div className="contact1">
      <div ref={contactRef} className="rightSide">
        <h1>Send me a message</h1>
        <div className="firstLine">
          <input placeholder="Your name" type="text" />
          <input placeholder="Your e-mail" type="text" />
        </div>
        <div>
          <input className="subject" placeholder="Subject" type="text" />
        </div>
        <div>
          <input className="message" placeholder="Message" type="text" />
        </div>
        <button>Send Message</button>
      </div>
      <div className="leftSide">
        <h1>My Contacts</h1>
        <p>Phone: +37441703113</p>
        <p>E-mail: rafaelafrikyan95@gmail.com</p>
        <p>Social network:</p>
        <div className="icons">
          <img src={githubIcon} alt="" />

          <img src={telegramIcon} alt="" />
          <img src={linkedinIcons} alt="" />
        </div>
      </div>
    </div>
  );
}
