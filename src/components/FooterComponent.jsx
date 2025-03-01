import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <div id='footer_component'>
            <div className='top-bar'>
                <div className="row justify-content-between gy-4">
                    <div className="col-sm-12">
                        <h3>ChromeCore</h3>
                    </div>
                    <div className="col-sm-4">
                        <h6>Creating opportunities that empower communities</h6>
                        <p>With a steadfast focus on operational excellence and environmental stewardship, ChromeCore Minerals is shaping the future of mining in South Africa, making us not just an employer of choice, but a partner in progress for the nation.</p>
                        <Link to="/about-us" className='footer-quick-link'>About us <span><i className='bi bi-arrow-right'></i></span></Link>
                    </div>
                    <div className="col-sm-4">
                        <div className="row gy-4">
                            <div className="col-sm-6">
                                <h6>Get in touch</h6>
                                <address>
                                    20 Oldens Way,<br/>
                                    Kelvin,<br/>
                                    Sandton, 2090
                                </address>
                                <p className='tel-link'><a href="tel:+27734748606">073 474 8606</a> / <a href="tel:+27721365012">072 136 5012</a></p>
                                <Link to="/contact-us" className='footer-quick-link'>Contact us <span><i className='bi bi-arrow-right'></i></span></Link>
                            </div>
                            <div className="col-sm-6">
                                <h6>Quick Links</h6>
                                <ul className='quick-links'>
                                    <li><Link to="/our-business">Our Business</Link></li>
                                    <li><Link to="/governance">Governance</Link></li>
                                    <li><Link to="/our-people">Our People</Link></li>
                                    <li><Link to="/social-responsibility">Social Responsibility</Link></li>
                                </ul>
                                <ul className='social-links'>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className='bi bi-facebook'></i></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className='bi bi-linkedin'></i></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className='bi bi-youtube'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-bar'>
                <p>&copy; {new Date().getFullYear()} ChromeCore Mineral (Pty) Ltd. All Rights Reserved.</p>
                <p>Designed by <a href="http://myplusplus.com" target="_blank" rel="noopener noreferrer">mY++</a></p>
            </div>
        </div>
    )
}

export default FooterComponent