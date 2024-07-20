import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/Self_transparent.png';
const Footer = () => {
  return (
    <div className='website-footer'>
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>CryptoList provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation.</p>
      </div>
      <div className="handles">
        <h3>Social Media Handles</h3>
        <ul>
          <li ><i class="fa-brands fa-twitter"></i>Twitter</li>
          <li><i class="fa-brands fa-instagram"></i>Instagram</li>
          <li><i class="fa-brands fa-facebook"></i>Facebook</li>
          <li><i class="fa-brands fa-youtube"></i>Youtube</li>
        </ul>
      </div>
      <div className="contact-us">
        <h3>Contact us</h3>
        <span>Phone No: +91 123456789</span>
        <span>Email: cryptolist@gmail.com</span>
      </div>
    </div>
  )
}

export default Footer
