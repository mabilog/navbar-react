import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes, FaReact } from 'react-icons/fa';

import SidebarData from './SidebarData';
import Submenu from './Submenu';

import NavbarData from './NavbarData';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Nav>
      <NavIcon to="/">
        <FaBars onClick={showSidebar}/> 
        <Title> React <FaReact/></Title>
      </NavIcon>
      <Navbar>
        {NavbarData.map((item, index) => {
          return (
          <li key={index} >
            <NavLink to={item.path}>{item.title} {item.icon}</NavLink>
          </li>
          )}
        )}
      </Navbar>
    </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrapper >
          <NavIcon to='#' onClick={showSidebar}>
            <FaTimes />
          </NavIcon>
          {SidebarData.map((item, index)=> {
            return <Submenu item={item} key={index} />
          })}
        </SidebarWrapper>
      </SidebarNav>
    </>
  )
}

const Nav = styled.div`
  position: sticky;
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;  

const NavIcon  = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white; 
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display:flex;
  justify-content: center;
  position:fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrapper = styled.div`
  width: 100%;
`;

const Title = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 2rem;
`;

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
  position: absolute;
  right: 30px;
  /* color: white;
  text-decoration: none;
  list-style: none; */
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-decoration: none;
  list-style: none;
  gap: 5px;
`;

export default Sidebar
