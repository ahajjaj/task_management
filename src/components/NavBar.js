import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles//Navbar.css';
import fire from "../fire";
import { IconContext } from 'react-icons';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const [theme, setTheme] = useState("light");

const themeToggler = () => {
  theme === "light" ? setTheme("dark") : setTheme("light");
};

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles />
              <StyledApp>
                <button onClick={() => themeToggler()}>Changer le thème</button>
              </StyledApp>
            </ThemeProvider>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-text'>
              <Link onClick={() => handleLogout()}>
                <FaIcons.FaSignOutAlt />
                <span>Déconnexion</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;