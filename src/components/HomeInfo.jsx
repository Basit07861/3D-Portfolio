import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
          {btnText}
          <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
  1: (
     <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className="font-semibold">Basit</span>
     <br/>
     A Software Engineer from India.</h1>
  ),
  2: (
    <InfoBox text="I am Currently Pursuing my Bachelors In Technology in Information Technology from Dr. APJ Abdul Kalam Technical University, Lucknow"
    link="/about"
    btnText="Learn More"
    />
  ),
  3: (
    <InfoBox text="Completed Mulitiple Projects over the duration of my Course. Curious about them?"
    link="/projects"
    btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox text="🚀 Let’s Turn Ideas into Excellence! ✨ Reach out, and let’s create something remarkable together. 💡"
    link="/contact"
    btnText="Let's Talk!"
    />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo