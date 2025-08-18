import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Dhanush Kumar. All rights reserved.</p>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/dhanush-kumar-rdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dhanushrdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
