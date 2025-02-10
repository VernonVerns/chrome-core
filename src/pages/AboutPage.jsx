import React from 'react';
import PageHeroComponent from '../components/PageHeroComponent';
import ImgDefault from "../assets/imgs/img_3.jpg"
import CTAComponent from '../components/CTAComponent';

const AboutPage = () => {
    return (
        <div id='about_page'>
            <PageHeroComponent
                pageTitle='About us'
                shortDesc='With a commitment to ethical business practices and community support, ChromeCore emphasizes teamwork, empowerment, and operational efficiency. The company aims to establish a fully integrated chrome mining operation and values growth, compliance, and creating a safe working environment.'
                path="About"
            />
            <div className="about-content">
                <div className='row gy-5'>
                    <div className="col-sm-12">
                        <h4 className='sub-title'>Overview</h4>
                        <p>
                            ChromeCore Minerals is a cutting-edge mining company dedicated to chrome tailings processing and beneficiation. With a focus on efficiency, sustainability, and technological innovation, we operate a high-performance chrome wash plant designed to maximize recovery and output. Our strategic approach ensures reliable sourcing, optimized processing, and long-term growth in the chrome mining sector. 
                        </p>
                        <p>
                            Driven by a commitment to excellence, we continuously enhance our operations through innovation, supply chain optimization, and sustainable practices. Our long-term vision includes expanding into full-scale chrome mining while upholding responsible mining standards and contributing to South Africa’s economic growth.
                        </p>
                    </div>
                    <div className="col-sm-12">
                        <img src={ImgDefault} className='about-img' alt="company mine" width="100%"/>
                    </div>
                    <div className='col-sm-12'>
                        <h4 className='sub-title'>Company history</h4>
                        <p>
                            Founded in June 2023 through a strategic partnership between ESP Mining, True Solutions Spec, and Lemosang Consulting, ChromeCore Minerals was established to revolutionize chrome tailings processing and beneficiation in South Africa. With a clear vision for sustainable and efficient mining, we have rapidly evolved from concept to a fully operational chrome wash plant, optimizing output and recovery.
                        </p>
                        <p>
                            From the outset, our focus has been on innovation, operational excellence, and building strong supplier and buyer networks. As we continue to grow, our commitment to ethical sourcing, environmental sustainability, and industry-leading efficiency remains at the core of everything we do. Looking ahead, we aim to expand into full-scale chrome mining, ensuring long-term value for our stakeholders and the communities we operate in.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <h4 className='sub-title'>Our Mission</h4>
                        <p>At ChromeCore Minerals, we are dedicated to responsibly extracting and processing chrome while fostering innovation, sustainability, and economic empowerment. Our mission is to create lasting value for our stakeholders, employees, and the communities we serve by prioritizing ethical mining practices, operational efficiency, and environmental responsibility.</p>
                    </div>
                    <div className="col-sm-6">
                        <h4 className='sub-title'>Our Vision</h4>
                        <p>We aspire to be Africa’s most trusted and innovative chrome mining company, setting new industry standards in environmental stewardship, operational excellence, and community development. Through continuous growth and technological advancements, we aim to lead the future of sustainable chrome mining.</p>
                    </div>
                </div>
            </div>
            <div className='why-us'>
                <div className="bg-overlay">
                    <div className='row justify-content-center'>
                        <div className='col-sm-6'>
                            <h4 className='sub-title'>Core Values</h4>
                            <ul>
                                <li>Integrity & Transparency: This involves ethical business practices at every level.</li>
                                <li>Teamwork: Emphasizing collaboration for operational success.</li>
                                <li>Total Commitment: Showing dedication to industry excellence.</li>
                                <li>Empowerment: Providing growth opportunities for employees and stakeholders</li>
                                <li>Urgency & Accuracy: Highlighting timely and precise execution</li>
                                <li>Time: Focusing on efficiency in operations and decision-making</li>
                            </ul>
                        </div>
                        <div className='col-sm-6'>
                            <h4 className='sub-title'>Why Choose ChromeCore Minerals?</h4>
                            <ul>
                                <li>Forward-Thinking Approach: ChromeCore Minerals was founded in June 2023 and focuses on sustainability, innovation, and contributing to South Africa’s mining sector.</li>
                                <li>Strategic Positioning: The company is strategically positioned to optimize output and efficiency with a state-of-the-art chrome wash plant.</li>
                                <li>Integrated Vision: ChromeCore Minerals aims to establish a fully integrated chrome mining and beneficiation operation.</li>
                                <li>Social Responsibility: The company is dedicated to supporting local communities through employment creation, skills development, sustainable environmental practices, and community engagement.</li>
                                <li>Comprehensive Compliance: ChromeCore Minerals holds all necessary certifications and permits for legal and responsible operation, including Environmental Impact Assessment (EIA), Water Use License (WUL), Health and Safety Certifications, and more.</li>
                                <li>Commitment to Core Values: The leadership is committed to integrity, transparency, teamwork, total commitment, empowerment, urgency, and accuracy.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CTAComponent catchyLine="Join Our Journey" shortText="At ChromeCore Minerals, we are shaping the future of mining in South Africa. Whether you are a potential investor, partner, or looking for career opportunities, we invite you to be part of our journey." />
        </div>
    )
}

export default AboutPage