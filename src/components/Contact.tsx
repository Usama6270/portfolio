import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current?.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="contact-title">CONTACT</h3>
        
        <div className="contact-main-grid">
          <div className="contact-left">
            <div className="contact-info-wrap">
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:hateemjaved8@gmail.com" className="info-link">
                  <FiMail /> hateemjaved8@gmail.com
                </a>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+923000748808" className="info-link">
                  <FiPhone /> (+92)-300-0748808
                </a>
              </div>
            </div>

            <div className="contact-socials-wrap">
              <h4>Social</h4>
              <div className="social-icons-wrapper">
                <a href="https://github.com/hateemxpam" target="_blank" className="social-icon-btn" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/hateemkb/" target="_blank" className="social-icon-btn" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="https://www.instagram.com/_.hateem" target="_blank" className="social-icon-btn" aria-label="Instagram">
                  <FiInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="user_name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="user_email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className={`submit-btn ${isSent ? "sent" : ""}`} disabled={isSending}>
                {isSending ? (
                  "Sending..."
                ) : isSent ? (
                  <>
                    Sent Successfully <FiCheckCircle />
                  </>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="copyright">
            <MdCopyright /> Hateem Khush Bakht
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




