import React from 'react'
import PageHeroComponent from '../components/PageHeroComponent'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <PageHeroComponent
                pageTitle='About us'
                shortDesc='With a steadfast focus on operational excellence and environmental stewardship, ChromeCore Minerals is shaping the future of mining in South Africa, making us not just an employer of choice, but a partner in progress for the nation.'
                path="About"
            />
        </div>
    )
}

export default AboutPage