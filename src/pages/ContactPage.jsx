import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeroComponent from "../components/PageHeroComponent";

const contactInfo = [
  {
    id: 1,
    contactName: "Contact sales",
    contactDesc: "Speak to our friendly team.",
    contactType: "email",
    contact: "sales@chromecore.co.za",
    contactIcon: "bi-chat-left-dots",
  },
  {
    id: 2,
    contactName: "Chat to support",
    contactDesc: "We're here to help.",
    contactType: "email",
    contact: "info.chromecore@gmail.com",
    contactIcon: "bi-envelope",
  },
  {
    id: 3,
    contactName: "Visit us",
    contactDesc: "Visit our office HQ.",
    contactType: "url",
    contact: "https://maps.app.goo.gl/RM7ZmkCbHUuqqJU98",
    contactIcon: "bi-geo-alt",
  },
  {
    id: 4,
    contactName: "Call us",
    contactDesc: "Mon-Fri from 8am to 5pm",
    contactType: "tel",
    contact: "+27734748606",
    contactIcon: "bi-telephone",
  },
];
const lambdaUrl =
  "https://vzv5ij6xjowamkf3smddvqfhly0pecfm.lambda-url.af-south-1.on.aws/";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlertMessage(null);

    try {
      const response = await axios.post(lambdaUrl, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setAlertMessage("Message sent successfully!");
      setAlertType("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      setAlertMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      setAlertType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact_page">
      <PageHeroComponent
        pageTitle="Contact us"
        shortDesc="We're here to assist with any questions or inquiries. Choose the category below that best describes your needs, and our team will ensure your message reaches the right place."
        path="Contact"
      />
      <div className="contact-cards">
        {contactInfo.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <div className="icon-container">
              <i className={`bi ${contact.contactIcon}`}></i>
            </div>
            <div className="card-details">
              <h5>{contact.contactName}</h5>
              <p>{contact.contactDesc}</p>
              <a
                href={
                  contact.contactType === "email"
                    ? `mailto:${contact.contact}`
                    : contact.contactType === "tel"
                    ? `tel:${contact.contact}`
                    : contact.contact
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.contactType === "url"
                  ? "View on Google Maps"
                  : contact.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="form-and-map">
        <div className="row">
          <div className="col-sm-6">
            <div className="map-side">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.91298847353!2d28.089852298491827!3d-26.074288761339158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95729366d57b41%3A0xe59aaa5083efde60!2s20%20Oldens%20Way%2C%20Kelvin%2C%20Sandton%2C%202090!5e0!3m2!1sen!2sza!4v1739015095347!5m2!1sen!2sza"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-side">
              <h4>Send Message</h4>
              {alertMessage && (
                <div
                  className={`alert ${
                    alertType === "success" ? "alert-success" : "alert-danger"
                  }`}
                >
                  {alertMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Message Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
