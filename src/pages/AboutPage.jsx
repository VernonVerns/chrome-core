import React from 'react';
import PageHeroComponent from '../components/PageHeroComponent';
import ImgDefault from "../assets/imgs/hero-img.jpg"
import CTAComponent from '../components/CTAComponent';

const AboutPage = () => {
    return (
        <div id='about_page'>
            <PageHeroComponent
                pageTitle='About us'
                shortDesc='With a steadfast focus on operational excellence and environmental stewardship, ChromeCore Minerals is shaping the future of mining in South Africa, making us not just an employer of choice, but a partner in progress for the nation.'
                path="About"
            />
            <div className="about-content">
                <div className='row gy-5'>
                    <div className="col-sm-12">
                        <h4 className='sub-title'>Overview</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis nisi dicta vel sit, ducimus doloribus unde debitis laudantium nostrum est, alias dolorem nam rem odit eaque quis impedit reiciendis!
                            Dolor quidem sed, enim omnis culpa natus eos vero inventore corporis unde architecto quae quisquam cumque eum ratione eius tempore, tempora atque assumenda consectetur recusandae commodi mollitia nihil? Pariatur, eveniet?
                            Possimus nemo voluptatum porro natus explicabo, fugit aspernatur earum maxime culpa nulla sunt, fugiat quisquam maiores blanditiis laudantium quam reprehenderit quae. 
                        </p>
                        <p>
                            At, numquam harum hic explicabo tempore in labore minus!
                            Aliquam harum explicabo illum modi obcaecati blanditiis qui accusantium, numquam voluptas quibusdam accusamus dignissimos, facilis veritatis eligendi porro totam ea quasi aspernatur perspiciatis officia dolorum veniam praesentium. Culpa, doloremque repellat?
                            Dolores qui laudantium sapiente? Culpa obcaecati quibusdam atque asperiores possimus fuga dicta eos impedit, distinctio numquam aperiam quas doloremque corporis reiciendis voluptatum necessitatibus tenetur architecto cum nesciunt nostrum harum doloribus.
                        </p>
                    </div>
                    <div className="col-sm-12">
                        <img src={ImgDefault} alt="company mine" width="100%"/>
                    </div>
                    <div className='col-sm-12'>
                        <h4 className='sub-title'>Company history</h4>
                        <p>
                            Founded with a vision to redefine chrome mining in South Africa, ChromeCore Minerals has steadily grown into a trusted industry player. Over the years, we have expanded our operations, adopted cutting-edge mining technologies, and built strong partnerships within the sector. Our journey has been marked by resilience, expertise, and a commitment to sustainable mining.
                        </p>
                        <p>
                        At, numquam harum hic explicabo tempore in labore minus! Aliquam harum explicabo illum modi obcaecati blanditiis qui accusantium, numquam voluptas quibusdam accusamus dignissimos, facilis veritatis eligendi porro totam ea quasi aspernatur perspiciatis officia dolorum veniam praesentium. Culpa, doloremque repellat? Dolores qui laudantium sapiente? Culpa obcaecati quibusdam atque asperiores possimus fuga dicta eos impedit, distinctio numquam aperiam quas doloremque corporis reiciendis voluptatum necessitatibus tenetur architecto cum nesciunt nostrum harum doloribus.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <h4 className='sub-title'>Our Mission</h4>
                        <p>To responsibly extract and process chrome while driving innovation, sustainability, and economic empowerment in South Africa and beyond. We are committed to creating long-term value for our stakeholders, employees, and the communities in which we operate.</p>
                    </div>
                    <div className="col-sm-6">
                        <h4 className='sub-title'>Our Vision</h4>
                        <p>To be the most trusted and innovative chrome mining company in Africa, setting new industry benchmarks in environmental stewardship, operational excellence, and community impact.</p>
                    </div>
                </div>
            </div>
            <div className='why-us'>
                <div className="bg-overlay">
                    <div className='row justify-content-center'>
                        <div className='col-sm-6'>
                            <h4 className='sub-title'>Core Values</h4>
                            <ul>
                                <li>Integrity – We conduct business with honesty, transparency, and accountability</li>
                                <li>Sustainability – We prioritize environmental responsibility and ethical mining practices.</li>
                                <li>Innovation – We embrace new technologies to enhance efficiency and safety.</li>
                                <li>Excellence – We are committed to the highest operational and safety standards.</li>
                                <li>Community Empowerment – We invest in local communities through job creation, education, and social initiatives.</li>
                            </ul>
                        </div>
                        <div className='col-sm-6'>
                            <h4 className='sub-title'>Why Choose ChromeCore Minerals?</h4>
                            <ul>
                                <li>Industry-leading expertise in chrome mining</li>
                                <li>Commitment to sustainability and ethical mining</li>
                                <li>Advanced technology and innovation-driven processes</li>
                                <li>Strong community involvement and job creation</li>
                                <li>Reliable supplier of high-quality chrome products</li>
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