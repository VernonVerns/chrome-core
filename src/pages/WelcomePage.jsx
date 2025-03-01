import React from 'react'
import CTAComponent from '../components/CTAComponent'
import { Link } from 'react-router-dom'

const Welcome = () => {
    const services = [
        {
            id: 1,
            icon: "bi bi-recycle",
            title: "Chrome Tailings Processing & Beneficiation",
            description: "We maximize chrome recovery from tailings, reducing waste and promoting sustainable mining practices.",
        },
        {
            id: 2,
            icon: "bi bi-truck",
            title: "Reliable Sourcing & Supply Chain Management",
            description: "We ensure a seamless chrome supply chain with efficient logistics and sourcing strategies.",
        },
        {
            id: 3,
            icon: "bi bi-droplet",
            title: "By-product Extraction & Commercialization",
            description: "We extract and commercialize valuable by-products, optimizing resource utilization.",
        },
        {
            id: 4,
            icon: "bi bi-lightbulb",
            title: "Technological Improvements for Efficiency",
            description: "We invest in innovation to enhance operational efficiency and mining sustainability.",
        },
        {
            id: 5,
            icon: "bi bi-gem",
            title: "Future Expansion into Raw Chrome Ore Mining",
            description: "We aim to extend our mining operations to raw chrome ore extraction, ensuring long-term growth.",
        },
    ];
    return (
        <div id="welcome_page">
            <div className='hero-part'>
                <div className='hero-img'>
                    <div className='inner-text'>
                        <h4>Mining holds the power to make the world a better place.</h4>
                        <Link to="/about-us" className='learn-more-btn'>Learn More</Link>
                    </div>
                </div>
                <div className='text-part'>
                    <div className="col-sm-6">
                        <h2><span>ChromeCore Minerals</span> Creating opportunities that empower communities</h2>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            ChromeCore Minerals is a forward-thinking South African mining company specializing in chrome tailings processing and beneficiation. Our operations are guided by a vision to develop a fully integrated chrome mining and beneficiation business while upholding the highest standards of sustainability, operational excellence, and community empowerment.
                        </p>
                    </div>
                </div>
            </div>

            <div className='quick-facts'>
                <div className='fact-grid'>
                    <div className='fact-item'>
                        <h4>4+</h4>
                        <p>Years of Mining Experience</p>
                    </div>
                    <div className='fact-item'>
                        <h4>200,000+</h4>
                        <p>Tonnes of Chrome Processed</p>
                    </div>
                    <div className='fact-item'>
                        <h4>100+</h4>
                        <p>Local Jobs Created</p>
                    </div>
                    <div className='fact-item'>
                        <h4>5+</h4>
                        <p>Active Mining Projects</p>
                    </div>
                </div>
            </div>

            <div className='services'>
                <h2>Our Core Services</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <i className={`service-icon ${service.icon}`}></i>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='why-choose-us'>
                <h2>Why Choose <span>ChromeCore Minerals?</span></h2>
                <ul className="why-list">
                    <li>
                    <i className="bi bi-award"></i>
                    <strong>Proven Expertise:</strong> Years of experience in chrome mining, beneficiation, and supply chain management.
                    </li>
                    <li>
                    <i className="bi bi-recycle"></i>
                    <strong>Sustainable Practices:</strong> We prioritize environmental responsibility and ethical mining processes.
                    </li>
                    <li>
                    <i className="bi bi-tools"></i>
                    <strong>Cutting-Edge Technology:</strong> We leverage advanced processing techniques to maximize efficiency and output.
                    </li>
                    <li>
                    <i className="bi bi-people"></i>
                    <strong>Community Empowerment:</strong> We create jobs and invest in local communities for long-term growth.
                    </li>
                    <li>
                    <i className="bi bi-globe"></i>
                    <strong>Global Supply Network:</strong> We maintain strong partnerships to ensure reliable chrome sourcing and distribution.
                    </li>
                </ul>
            </div>

            <CTAComponent catchyLine='Partner with Us' shortText='Looking for reliable chrome mining and beneficiation solutions?' />
        </div>
    )
}

export default Welcome