import React from 'react'
import CTAComponent from '../components/CTAComponent'
import { Link } from 'react-router-dom'

const Welcome = () => {
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
                            ChromeCore Minerals is a dynamic and forward-thinking South African company operating at the core of the mining sector. We pride ourselves on being a catalyst for growth within the industry, contributing significantly to the nation’s economy while upholding the highest standards of excellence and sustainability.
                        </p>
                    </div>
                </div>
            </div>
            <div className='service-list'>
                <div className='row'>
                    <div className="col-sm-12">
                        <h4>Services Here</h4>
                    </div>
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
            <CTAComponent />
        </div>
    )
}

export default Welcome