import React from 'react'
import { Link } from 'react-router-dom'
import PageHeroComponent from '../components/PageHeroComponent'

const conatctInfo = [
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
        contact: "info@chromecore.co.za",
        contactIcon: "bi-envelope",
    },
    {
        id: 3,
        contactName: "Visit us",
        contactDesc: "Visit our office HQ.",
        contactType: "url",
        contact: "https://maps.app.goo.gl/zF3uUwAoRkJYRAET7",
        contactIcon: "bi-geo-alt",
    },
    {
        id: 4,
        contactName: "Call us",
        contactDesc: "Mon-Fri from 8am to 5pm",
        contactType: "tel",
        contact: "+27122945693",
        contactIcon: "bi-telephone",
    },
]
const ContactPage = () => {
    return (
        <div id='contact_page'>
            <div className="page-hero">
                <PageHeroComponent
                    pageTitle='Contact us'
                    shortDesc='We’re here to assist with any questions or inquiries. Choose the category below that best describes your needs, and our team will ensure your message reaches the right place.'
                    path='Contact'
                />
            </div>
            <div className='contact-cards'>
                {conatctInfo.map((contact) => (
                    <div className="contact-card" key={contact.id}>
                        <div className='icon-container'>
                            <i className={`bi ${contact.contactIcon}`}></i>
                        </div>
                        <div className='card-details'>
                            <h5>{contact.contactName}</h5>
                            <p>{contact.contactDesc}</p>
                            <a href={contact.contactType === "email" ? `mailto:${contact.contact}` : contact.contactType === "tel" ? `tel:${contact.contact}` : contact.contact} target="_blank" rel="noopener noreferrer">{contact.contactType === "url" ? 'View on Google Maps' : contact.contact}</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='form-and-map'>
                <div className='row'>
                    <div className="col-sm-6">
                        <div className="map-side">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14333.843166723535!2d28.067556977777482!3d-26.083872899560824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95731eb6e4e3ab%3A0x6a52bd98aed2fe7b!2sMorningside%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1736681148183!5m2!1sen!2sza" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className='form-side'>
                            <h4>Send Message</h4>
                            <form action="" method="post">
                                <input type="text" name="fullname" id="fullname" placeholder='Your Name' />
                                <input type="email" name="email" id="email" placeholder='Email Address' />
                                <input type="text" name='subject' id='subject' placeholder='Message Subject' />
                                <textarea name="message" id="message" placeholder='Message'></textarea>
                                <button type='submit' className='submit-btn'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage