import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via social media or email!</p>
      <div className="social-icons">
        <a href="https://github.com/suryaprabhat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/surya-prabhat-maddala-5178b22bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://x.com/MaddalaPrabhat" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=maddalasuryaprabhat@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email">
          <FaEnvelope />
</a>
      </div>
    </div>
  );
};

export default Contact;
