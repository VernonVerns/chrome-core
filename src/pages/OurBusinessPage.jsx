import React from 'react'
import PageHeroComponent from '../components/PageHeroComponent'
import CTAComponent from '../components/CTAComponent'

const OurBusinessPage = () => {
  return (
    <div id='our_business'>
        <PageHeroComponent
            pageTitle="Our Business"
            shortDesc="We specialize in chrome tailings processing and beneficiation, leveraging advanced technology to maximize efficiency and sustainability. Our operations focus on responsible resource recovery, supply chain excellence, and long-term industry growth."
            path="Business"
        />
        <div className='our-business-content'>
            <div className='services'>
                <h2>Our Core Services</h2>
                <div className='row gy-5 gx-5'>
                    <div className="col-sm-6">
                        <h4>Chrome Tailings Processing & Beneficiation</h4>
                        <p>We specialize in extracting valuable chrome from tailings, ensuring that previously discarded materials are efficiently processed to recover usable chrome. This not only minimizes waste but also contributes to sustainable mining by maximizing resource utilization.</p>
                        <h5>Why it Matters?</h5>
                        <ul>
                            <li>Reduces environmental impact by repurposing mining waste.</li>
                            <li>Enhances efficiency in chrome recovery.</li>
                            <li>Supports responsible mining practices.</li>
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <h4>Reliable Sourcing & Supply Chain Management</h4>
                        <p>We ensure a stable and efficient supply of high-quality chrome by maintaining strong relationships with suppliers and buyers. Our logistics and procurement strategies focus on consistency, transparency, and efficiency, making us a trusted partner in the industry.</p>
                        <h5>Why it Matters?</h5>
                        <ul>
                            <li>Ensures a steady supply of chrome for buyers.</li>
                            <li>Maintains strong supplier relationships for sustainable operations.</li>
                            <li>Optimizes logistics to reduce costs and improve efficiency.</li>
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <h4>By-Product Extraction & Commercialization</h4>
                        <p>Beyond chrome, our operations focus on extracting and commercializing by-products that have industrial value. This helps maximize profitability and resource utilization while reducing mining waste.</p>
                        <h5>Why it Matters?</h5>
                        <ul>
                            <li>Diversifies revenue streams.</li>
                            <li>Reduces environmental waste by repurposing by-products.</li>
                            <li>Enhances efficiency in resource extraction.</li>
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <h4>Continuous Technological Improvements</h4>
                        <p>We leverage cutting-edge technology to enhance operational efficiency, improve recovery rates, and optimize the performance of our chrome wash plant. From automated processing systems to advanced beneficiation techniques, we are committed to staying ahead of industry trends.</p>
                        <h5>Why it Matters?</h5>
                        <ul>
                            <li>Improves efficiency and reduces operational costs.</li>
                            <li>Enhances safety standards and compliance.</li>
                            <li>Increases chrome recovery rates through innovation.</li>
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <h4>Future Expansion into Raw Chrome Ore Mining</h4>
                        <p>Our long-term vision includes scaling up operations to full-scale chrome ore mining. This involves land acquisition, infrastructure development, and integrating backward into mining operations to ensure full control over the supply chain.</p>
                        <h5>Why it Matters?</h5>
                        <ul>
                            <li>Strengthens self-sufficiency and production capacity.</li>
                            <li>Enhances long-term sustainability and growth.</li>
                            <li>Expands job creation and economic impact in South Africa.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <CTAComponent 
            catchyLine='Ready To To Business With Us?'
            shortText="With a commitment to innovation and ethical mining, we are expanding towards full-scale chrome mining to create lasting value for our stakeholders and communities."            
        />
    </div>
  )
}

export default OurBusinessPage