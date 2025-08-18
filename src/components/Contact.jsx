import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>📬 Contact Me</h2>
      <p>Let’s connect! Reach me via:</p>

      <div className="contact-icons">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dhanush-kumar-rdk"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={28} />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/dhanushrdk"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} />
          <span>GitHub</span>
        </a>

        {/* Gmail */}
        <a href="mailto:dhanushkumar200428@gmail.com">
          <FaEnvelope size={28} />
          <span>Gmail</span>
        </a>

        {/* Phone */}
        <a href="tel:+918248603405">
          <FaPhone size={28} />
          <span>+91 8248603405</span>
        </a>
      </div>
    </section>
  );
}
