import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
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

    // Validate required env vars early to give clearer errors
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSending(false);
      console.error("EmailJS env vars missing", { serviceId, templateId, publicKey });
      alert("EmailJS is not configured. Please set the required environment variables and try again.");
      return;
    }

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
          console.error("EmailJS Error:", error);
          // Try to extract details from common error shapes
          let details = "unknown error";
          try {
            if (error && typeof error === "object") {
              // EmailJS sometimes returns { status, text }
              // or an Error with message
              // or a string
              // stringify for full visibility
              details = error.text || error.status || (error.message && String(error.message)) || JSON.stringify(error);
            } else if (typeof error === "string") {
              details = error;
            }
          } catch (e) {
            details = "failed to parse error details";
          }
          alert(`Failed to send message (${details}). Please check console/network and try again.`);
        }
      );
  };

  useEffect(() => {
    // Initialize EmailJS SDK (safe to call even if public key is passed to sendForm)
    try {
      const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (pub) emailjs.init(pub);
    } catch (err) {
      console.warn("EmailJS init failed:", err);
    }
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="contact-title">CONTACT</h3>
        
        <div className="contact-main-grid">
          <div className="contact-left">
            <div className="contact-info-wrap">
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:usamaunder19@gmail.com" className="info-link">
                  <FiMail /> usamaunder19@gmail.com
                </a>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+923041632932" className="info-link">
                  <FiPhone /> (+92)-304-1632932
                </a>
              </div>
            </div>

            <div className="contact-socials-wrap">
              <h4>Social</h4>
              <div className="social-icons-wrapper">
                <a href="https://github.com/Usama6270" target="_blank" className="social-icon-btn" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/usama-jamshed-a9a223264/" target="_blank" className="social-icon-btn" aria-label="LinkedIn">
                  <FiLinkedin />
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
            <MdCopyright /> Usama Jamshed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




