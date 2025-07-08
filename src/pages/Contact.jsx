import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 2000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div className="contact-info-content">
                <h3>Phone</h3>
                <p>+998 90 123 45 67</p>
                <p>+998 71 234 56 78</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>info@contextstore.uz</p>
                <p>support@contextstore.uz</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-content">
                <h3>Address</h3>
                <p>Tashkent, Uzbekistan</p>
                <p>Chilanzar District, 12A</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaClock />
              </div>
              <div className="contact-info-content">
                <h3>Working Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link linkedin">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Send us a Message</h2>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser className="label-icon" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope className="label-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`form-submit-btn ${
                  isSubmitting ? "submitting" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2 className="map-title">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3876462!2d69.2401394!3d41.2995494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ContextStore Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
