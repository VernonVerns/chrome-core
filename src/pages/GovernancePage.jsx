import React from 'react'
import PageHeroComponent from '../components/PageHeroComponent';
import LeadershipImg from '../assets/imgs/leaders.jpg';
import CTAComponent from '../components/CTAComponent';

const GovernancePage = () => {
  return (
    <div id='governance_page'>
        <PageHeroComponent
            pageTitle="Governance"
            shortDesc="Our structured shareholding model and compliance framework ensure strategic decision-making, operational excellence, and long-term sustainability. Guided by strong leadership and industry best practices, we uphold the highest standards in regulatory compliance, risk management, and stakeholder engagement to drive growth while maintaining integrity in all our operations."
            path="Governance"
        />
        <div className='governance-content'>
            <div className='board-content'>
                <div className="row gx-5">
                    <div className="col-12 header-part">
                        <h2>Board of Directors & Leadership</h2>
                        <p>
                            ChromeCore Minerals is led by a team of industry experts dedicated to driving innovation, operational excellence, and sustainable mining practices. Our leadership structure ensures strategic decision-making, transparency, and long-term business growth.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={LeadershipImg} alt="Board of directors" className='leadership-img' />
                    </div>
                    <div className="col-sm-6">
                        <h5>Shareholding Structure</h5>
                        <p>Our governance model is built on a well-defined shareholding structure that fosters collaboration and accountability:</p>
                        <ul>
                            <li><b>ESP Mining</b> – 23.33%</li>
                            <li><b>True Solutions Spec</b> – 33.33%</li>
                            <li><b>Lemosang Consulting</b> – 33.34%</li>
                            <li><b>AMX</b> – 10%</li>
                        </ul>
                        <h5>Leadership Commitment</h5>
                        <p>Our leadership team is committed to:</p>
                        <ul>
                            <li>Ensuring ethical and responsible mining operations.</li>
                            <li>Driving innovation and efficiency in chrome beneficiation.</li>
                            <li>Upholding the highest safety, environmental, and regulatory standards.</li>
                            <li>Strengthening partnerships with suppliers, buyers, and local communities.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='compliance-content'>
                <div className="row">
                    <div className="col-12 header-part">
                        <h2>Corporate Policies & Compliance</h2>
                        <p>
                            At ChromeCore Minerals, we adhere to strict corporate policies and regulatory standards to ensure ethical, safe, and sustainable mining operations. Our commitment to compliance safeguards our employees, stakeholders, and the environment while reinforcing our reputation as a responsible mining company.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <h5>Regulatory Compliance</h5>
                        <p>We operate in full compliance with South African mining laws and industry regulations, holding the necessary certifications and permits, including:</p>
                        <ul>
                            <li><b>Environmental Impact Assessment (EIA)</b> – Ensuring minimal environmental disruption.</li>
                            <li><b>Water Use License (WUL)</b> – Regulating water sourcing, usage, and disposal.</li>
                            <li><b>Health & Safety Certifications</b> – Complying with the Mine Health and Safety Act.</li>
                            <li><b>Risk Assessment Reports</b> – Identifying and mitigating workplace hazards.</li>
                            <li><b>Waste Management Compliance</b> – Responsible disposal and treatment of by-products.</li>
                            <li><b>Fire & Emergency Services Compliance</b> – Adhering to fire safety regulations.</li>
                            <li><b>Transport & Logistics Compliance</b> – Following national road traffic laws.</li>
                            <li><b>COVID-19 Safety Compliance</b> – Maintaining health and safety protocols.</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h5>Corporate Policies</h5>
                        <p>Our internal policies are designed to promote ethical business practices and long-term sustainability:</p>
                        <ul>
                            <li><b>Integrity & Transparency</b> – Upholding honesty and accountability in all operations.</li>
                            <li><b>Environmental Stewardship</b> – Minimizing our ecological footprint through responsible mining.</li>
                            <li><b>Workplace Safety</b> – Prioritizing employee well-being with strict safety measures.</li>
                            <li><b>Community Engagement</b> – Investing in local development and empowerment programs.</li>
                            <li><b>Sustainable Growth</b> – Implementing innovative solutions to enhance efficiency and productivity.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <CTAComponent />
    </div>
  )
}

export default GovernancePage