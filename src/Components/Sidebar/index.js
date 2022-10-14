import React from 'react';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaBuffer
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} style={{color: "#ffb703"}}/>  
      <Content>
        <Link 
        style={{textDecoration: "none"}}
        to="/">  
        <SidebarItem Icon={FaHome} Text="Home" />
        </Link>

        <Link 
        style={{textDecoration: "none"}}
        to="/Cesta">
        <SidebarItem Icon={FaBuffer} Text="Cesta" />
        </Link>

        <Link 
        style={{textDecoration: "none"}}
        to="/Login">
        <SidebarItem Icon={FaUserAlt} Text="Admin" />
        </Link>
      </Content>
    </Container>
  )
}

export default Sidebar