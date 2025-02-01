import React from 'react'
import { Link } from 'react-router-dom'

const CTAComponent = ({shortText, catchyLine = "Want to talk? Reach out to our experts."}) => {
  return (
    <div className='cta-component'>
        <div className='text-side-cta'>
          <h4>
              {catchyLine}
          </h4>
          {shortText && <p>{shortText}</p>}
        </div>
        <Link to="/contact-us" className='contact-btn'>Contact us</Link>
    </div>
  )
}

export default CTAComponent