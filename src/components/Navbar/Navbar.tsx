import React from "react";
import "./style.scss";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";

const Navbar = () => {
  // When the user scrolls down 120px (more than navbar height) from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbarLogo = document.getElementById("navbar_logo");
    const navbarLogoMobile = document.getElementById("navbar_logo_mobile");
    const menuIconMobile = document.getElementById("menu_icon_mobile");
    const navbarButton = document.getElementsByClassName(
      "navbar_button"
    ) as HTMLCollectionOf<HTMLElement>;

    if (navbar && navbarLogo && navbarLogoMobile && menuIconMobile) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 0
      ) {
        navbar.style.background = "rgba(0,0,0, 0.5";
        navbar.style.padding = "10px 0 10px 0";
        navbarLogo.style.color = "var(--primary_white)";
        navbarLogoMobile.style.color = "var(--primary_white)";
        menuIconMobile.style.color = "var(--primary_white)";
        for (var i = 0; i < navbarButton.length; i++) {
          navbarButton[i].classList.add("navbar_button_scrolled");
          navbarButton[i].classList.remove("navbar_button_normal");
        }
      } else {
        navbar.style.background = "none";
        navbar.style.padding = "30px 0 30px 0";
        navbarLogo.style.color = "inherit";
        navbarLogoMobile.style.color = "inherit";
        menuIconMobile.style.color = "var(--primary_darkblue)";
        for (var j = 0; j < navbarButton.length; j++) {
          navbarButton[j].classList.add("navbar_button_normal");
          navbarButton[j].classList.remove("navbar_button_scrolled");
        }
      }
    }
  }

  //navbar MOBILE
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e: any) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
        <div className="navbar_container_mobile">
        <h4 id="navbar_logo_mobile">SUA LOGO</h4>
        <AppBar
            position="static"
            sx={{
              marginRight: "40px",
              background: "transparent",
              boxShadow: "0",
              justifyContent: "center",
              width: "50px"
            }}
          >
          <Toolbar disableGutters>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                id="menu_icon_mobile"
              >
                <MenuIcon sx={{ fontSize: "35px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem>
                  <Link
                    to="home"
                    onClick={handleCloseNavMenu}
                    smooth                    
                    className="nav-link"
                  >
                    Início
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem>
                  <Link
                    to="about"
                    onClick={handleCloseNavMenu}
                    smooth                    
                    className="nav-link"
                  >
                    Sobre
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem>
                  <Link
                    to="routes"
                    onClick={handleCloseNavMenu}
                    smooth                    
                    className="nav-link"
                  >
                    Rotas
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem>
                  <Link
                    to="gallery"
                    onClick={handleCloseNavMenu}
                    smooth                    
                    className="nav-link"
                    offset={-50}
                  >
                    Galeria
                  </Link>
                </MenuItem>                
                <hr />
                <MenuItem>
                  <Link
                    to="contact"
                    onClick={handleCloseNavMenu}
                    smooth                    
                    className="nav-link"
                  >
                    Contato
                  </Link>
                </MenuItem>
              </Menu>
              </Toolbar>
          </AppBar>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;