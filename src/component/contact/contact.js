import React,{useRef} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6fta7ia', 'template_y3t3k7a', form.current, {
        publicKey: 'IEH12cyBf1BeKxglo',
      })
      .then(
        () => {
          alert("Email sent successfully")
          e.target.reset()
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div id="contact">
        <h1>Contact Me</h1>
        <p>
          Get in touch to discuss your project, ask questions, or collaborate.
          I'm here to help you bring your vision to life.
        </p>
        <form action="" method="post" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" className="field name" name="from_name" />
          <input
            type="email"
            placeholder="Your Email"
            className="field email"
            name="from_email"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit">
            Send
          </button>
        </form>
        <div className="links">
          <i className="fa-brands fa-github" style={{ color: "#141e2f" }}></i>
          <i className="fa-brands fa-instagram" style={{ color: "#cc3352" }}></i>
          <i className="fa-brands fa-facebook" style={{ color: "#1060ea" }}></i>
          <i className="fa-brands fa-whatsapp" style={{ color: "#006b15" }}></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
