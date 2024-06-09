import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            
        <a href="https://www.facebook.com">
          <FacebookIcon/>
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon/>
        </a>
        <a href="https://twitter.com">
          <TwitterIcon/>
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon/>
        </a>
        </div>
        <p>
                &copy; 2024 pedrotechpizza.com
            </p>
    </div>
  )
}

export default Footer
