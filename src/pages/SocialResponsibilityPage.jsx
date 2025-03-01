import React from 'react'
import PageHeroComponent from '../components/PageHeroComponent'
import CTAComponent from '../components/CTAComponent'
import ComDevImg from '../assets/imgs/com-dev_img.jpg'

function SocialResponsibilityPage() {
  return (
    <div id='social_responsibility'>
        <PageHeroComponent 
            pageTitle="Social Responsibility"
            path="Social Responsibility"
            shortDesc="At ChromeCore Minerals, we believe that our success is deeply tied to the well-being of the communities in which we operate. Our social responsibility initiatives are designed to create lasting, positive impacts by fostering economic growth, education, environmental sustainability, and social development."
        />

        <div className='content'>
            <div className="row gx-5 gy-5">
                <div className="col-sm-6">
                    <h4>Community Development</h4>
                    <p>We actively engage with local communities to drive meaningful change through:</p>
                    <ul>
                        <li><b>Job Creation & Skills Development</b> - Providing employment opportunities and upskilling programs to empower local talent.</li>
                        <li><b>Education & Training</b> - Supporting schools, bursary programs, and vocational training to equip future generations with valuable skills.</li>
                        <li><b>Infrastructure Development</b> - Investing in essential community infrastructure such as roads, water supply, and healthcare facilities.</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h4>Environmental Stewardship</h4>
                    <p>As a responsible mining company, we are committed to minimizing our environmental footprint through:</p>
                    <ul>
                        <li><b>Sustainable Mining Practices</b> - Implementing eco-friendly extraction methods to reduce environmental impact.</li>
                        <li><b>Rehabilitation & Land Restoration</b> - Ensuring mined areas are rehabilitated and repurposed for future use.</li>
                        <li><b>Water & Energy Conservation</b> - Reducing resource consumption through efficient water management and renewable energy integration.</li>
                    </ul>
                </div>

                <div className='col-sm-12'>
                    <img src={ComDevImg} className='com-dev-img' alt="Community Development" />
                </div>

                <div className="col-sm-6">
                    <h4>Health & Wellness Initiatives</h4>
                    <p>We support community health and well-being through:</p>
                    <ul>
                        <li><b>Healthcare Access & Support</b> - Partnering with local health organizations to improve medical services.</li>
                        <li><b>HIV/AIDS & Disease Awareness</b> - Running educational campaigns to promote health and disease prevention.</li>
                        <li><b>Employee & Community Wellness Programs</b> - Encouraging healthy living through fitness, nutrition, and mental health support programs.</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h4>Ethical Business Practices & Stakeholder Engagement</h4>
                    <p>We uphold the highest standards of ethics and transparency by:</p>
                    <ul>
                        <li><b>Fair Labor Practices</b> - Ensuring safe working conditions, fair wages, and respect for human rights.</li>
                        <li><b>Inclusive Growth</b> - Prioritizing partnerships with local businesses and suppliers.</li>
                        <li><b>Community Engagement & Feedback</b> - Maintaining open dialogue with stakeholders to align our initiatives with community needs.</li>
                    </ul>
                </div>
            </div>
        </div>

        <CTAComponent catchyLine="Join Our Journey" shortText="At ChromeCore Minerals, we are shaping the future of mining in South Africa. Whether you are a potential investor, partner, or looking for career opportunities, we invite you to be part of our journey." />
    </div>
  )
}

export default SocialResponsibilityPage