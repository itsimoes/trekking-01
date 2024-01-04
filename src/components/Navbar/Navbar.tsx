import React from "react";
import "./style.scss";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  // When the user scrolls down 120px (more than navbar height) from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbarLogo = document.getElementById("navbar_logo");
    const navbarButton = document.getElementsByClassName(
      "navbar_button"
    ) as HTMLCollectionOf<HTMLElement>;   

    if (navbar && navbarLogo) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 0
      ) {
        navbar.style.background = "rgba(0,0,0, 0.5";
        navbar.style.padding = "10px 0 10px 0";
        navbarLogo.style.color = "var(--primary_white)";
        for (var i = 0; i < navbarButton.length; i++) {
          navbarButton[i].classList.add("navbar_button_scrolled");
          navbarButton[i].classList.remove("navbar_button_normal");
        }
      } else {
        navbar.style.background = "none";
        navbar.style.padding = "30px 0 30px 0";
        navbarLogo.style.color = "inherit";
        for (var j = 0; j < navbarButton.length; j++) {
          navbarButton[j].classList.add("navbar_button_normal");
          navbarButton[j].classList.remove("navbar_button_scrolled");
        }
      }
    }
  }

  return (
    <div id="navbar" className="navbar_wrapper">
      <div className="navbar_container">
        <h4 id="navbar_logo">SUA LOGO</h4>
        <div className="navbar_links_container">
          <div className="navbar_links">
            <Link
              to="home"
              smooth
              className="navbar_button navbar_button_normal"
            >
              Início
            </Link>
            <Link
              to="about"
              smooth
              className="navbar_button navbar_button_normal"
            >
              Sobre
            </Link>
            <Link
              to="routes"
              smooth
              className="navbar_button navbar_button_normal"
            >
              Rotas
            </Link>
            <Link
              to="gallery"
              smooth
              className="navbar_button navbar_button_normal"
            >
              Galeria
            </Link>
            <Link
              to="contact"
              smooth
              className="navbar_button navbar_button_normal"
            >
              Contato
            </Link>
          </div>

          <div className="nav_searchbar">
            <FaSearch className="nav_search_icon" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
