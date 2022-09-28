import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'



const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h2 className='gradient__text'>
          We can help you, come join us in our endevaour to create a better society
        </h2>

        <div className='gpt3__footer-btn'>
          <p>Subscribe for more updates</p>
        </div>
      </div>


      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>Health care, Medoc here</p>
          <p>©Medoc pvt ltd</p>
        </div>

        <div className='gpt3__footer-links_updates'>
          <div className='gpt3__footer-links_uphead' id='contact'>
            <h3>For more updates</h3>
            <p>Contact us</p>
            <div className='gpt3__footer-social-logo'>
              <a href='https://www.instagram.com/medochealth.in/' alt='instagram link' target="_blank" rel="noopener noreferrer">
                <img src="instagram.svg" alt="" />
              </a>
              <a href='https://www.youtube.com/' alt='youtube link' target="_blank" rel="noopener noreferrer">
                <img src="youtube.svg" alt="youtube logo" />
              </a>
              <a href='https://www.linkedin.com/' alt='linkedin link' target="_blank" rel="noopener noreferrer">
                <img src="linkedin.svg" alt="linkedin logo" />
              </a>
              <a href='https://www.gmail.com/' alt='gmail link' target="_blank" rel="noopener noreferrer">
                <img src="gmail.svg" alt="gmail logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
