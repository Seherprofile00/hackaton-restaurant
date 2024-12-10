import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import leaves from "../Public/Rectangle 8925.png"



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <h2 className='footer-heading'>
            sti<span className="text-white">ll you need our sport</span>
          </h2>
          <h2 className='footer-subheading'>
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </h2>
          <h2 className='footer-divider'>
            _________________________________________________________________________________________________________
          </h2>
          <input
            type="text"
            id="footer-field"
            placeholder="Enter your email"
            name="footer-field"
            className='footer-input'
          />
          <button className='footer-button'>Enter</button>
        </div>

        {/*  */}


        <div>
      <div className="container">
        <div className="flexWrap">
          <div className="column columnMd">
            <h2 className="heading">About us</h2>
            <nav className="list">
              <li className="listItem">
                <a className="link">orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</a>
              </li>
              <li className="listItem">
                <a className="link">Get 10% off your first order</a>
              </li>
              
            </nav>
          </div>
          <div className={"column columnMd"}>
            <h2 className="heading">Useful links</h2>
            <nav className="list">
              <li className="listItem">
                <a className="link">
                  About
                </a>
              </li>
              <li className="listItem">
                <a className="link">News</a>
              </li>
              <li className="listItem">
                <a className="link">Partners</a>
              </li>
            </nav>
          </div>
          {/* Repeat for other columns */}
        </div>
      </div>
      <div className="footerBottom">
        <span className="copyright">
          Dont copyright@. All rights are reserved
         
        </span>
        <div className='footer-fa'>
          <FaInstagram className="icon" />
          <BiLogoGmail className="icon" />
          <FaFacebookF className="icon" />
         
        </div>
        <Image className='footer-image' src={leaves} alt='123' width={294} height={422}/>
      </div>
    </div>
    





      </footer>
    </>
  );
};

export default Footer;
