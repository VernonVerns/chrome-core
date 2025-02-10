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
                            ChromeCore Minerals is a forward-thinking South African mining company specializing in chrome tailings processing and beneficiation. Our operations are guided by a vision to develop a fully integrated chrome mining and beneficiation business while upholding the highest standards of sustainability, operational excellence, and community empowerment.
                        </p>
                    </div>
                </div>
            </div>
            <div className='service-list'>
                <div className='row'>
                    <div className="col-sm-12">
                        <h4>Services Here</h4>
                    </div>
                    <div className='card-container'>
                        
                    </div>
                </div>
            </div>
            <CTAComponent />
        </div>
    )
}

export default Welcome