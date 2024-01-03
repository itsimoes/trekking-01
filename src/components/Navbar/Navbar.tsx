import React from 'react'
import "./style.scss"
import { Link } from 'react-scroll';
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="navbar_wrapper">
        <div className="navbar_container">
            <h4 className='navbar_logo'>SUA LOGO</h4>
            <div className="navbar_links_container">
                <div className="navbar_links">
                    <Link to='home' smooth className='navbar_button' >Início</Link>
                    <Link to='about'smooth className='navbar_button' >Sobre</Link>
                    <Link to='routes'smooth className='navbar_button' >Rotas</Link>
                    <Link to='gallery'smooth className='navbar_button' >Galeria</Link>
                    <Link to='contact'smooth className='navbar_button' >Contato</Link>
                </div>

                <div className="nav_searchbar">
                    <FaSearch className='nav_search_icon'/>
                    <input type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar