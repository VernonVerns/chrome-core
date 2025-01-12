import React from 'react'
import { Link } from 'react-router-dom'

const PageHeroComponent = ({ pageTitle, shortDesc, path }) => {
    return (
        <div className='page-hero'>
            <div className='text-side'>
                <h2>{pageTitle}</h2>
                <p>{shortDesc}</p>

                <div className='page-navigation'>
                    <p><Link to="/">Home</Link> / {path}</p>
                </div>
            </div>
            <div className='img-side'></div>
        </div>
    )
}

export default PageHeroComponent