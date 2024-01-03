import React from "react";
import "./style.scss";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="wrapper footer_wrapper">
      <div className="container footer_container">
        <h3 className="footer_logo">SUA LOGO</h3>
        <div className="footer_cards_container">
          <div className="footer_about">
            <h4>Sobre Nós</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              itaque fugiat sit eius ab unde recusandae, ut obcaecati
              consequatur, labore repudiandae odio eos voluptatibus doloribus.
              Saepe aspernatur dolores fugiat itaque?
            </p>
          </div>
          <div className="footer_socialmedia">
            <h4>Siga-nos nas redes sociais!</h4>
            <div className="footer_socialmedia_icons_container">
              <div className="footer_socialmedia_card">
                <FaInstagram className="footer_icon" />
                <div className="footer_socialmedia_text">sua_conta</div>
              </div>
              <div className="footer_socialmedia_card">
                <FaFacebook className="footer_icon" />
                <div className="footer_socialmedia_text">sua_conta</div>
              </div>
              <div className="footer_socialmedia_card">
                <FaTwitter className="footer_icon" />
                <div className="footer_socialmedia_text">sua_conta</div>
              </div>
              <div className="footer_socialmedia_card">
                <FaLinkedin className="footer_icon" />
                <div className="footer_socialmedia_text">sua_conta</div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
