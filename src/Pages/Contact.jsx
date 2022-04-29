import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="rightSide">
        <h1>Send me message</h1>
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
     
            <img
              src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
              alt=""
            />
         

          <img
            src=" https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            alt=""
          />
          <img src="http://cdn.onlinewebfonts.com/svg/img_395161.png" alt="" />
        </div>
      </div>
    </div>
  );
}
