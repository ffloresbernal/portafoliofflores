import React,{useState} from 'react';
import './Navbar.css';
import {Container,Wrapper , LogoContainer, Menu,MenuItem, MobileIcon} from './Navbar.component';
import {NavLink} from 'react-router-dom';
import {FaFreebsd,FaBars,FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons'

export const Navbar = () => {
    const [showMobileMenu,setShowMenu] = useState(false);

  return (

    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{ fontSize:"2rem"} }} >

                <LogoContainer>
                    <FaFreebsd />
                    <p className='parrafo-nav'>Fernando Flores - Portafolio</p>
                </LogoContainer>
                <MobileIcon onClick={()=> setShowMenu(!showMobileMenu) }>
                    { showMobileMenu ? <FaTimes /> : <FaBars />}
                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MenuItem className='menu-item'>
                        <NavLink to='/home' className='menuLink' >Home</NavLink>
                    </MenuItem>
                    <MenuItem className='menu-item'>
                        <NavLink to='/about-me' className='menuLink'>Sobre mi</NavLink>
                    </MenuItem>
                    <MenuItem className='menu-item'>
                        <NavLink to='/proyects' className='menuLink' >Proyectos</NavLink>
                    </MenuItem>
                    <MenuItem className='menu-item'> 
                        <NavLink to='/cv' className='menuLink'>curriculum</NavLink>
                    </MenuItem>
                </Menu>

            </IconContext.Provider>
        </Wrapper>
    
    </Container>
  )
}
