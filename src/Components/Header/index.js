import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';

import { 
HeaderContainer,
EnterpriseName
} from './styles';

function Header() {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  
  return (
    <HeaderContainer>
    <FaBars onClick={showSiderbar} style={{color: "#FFFFFF"}} size={30}/>
    {sidebar && <Sidebar active={setSidebar} />}
      <EnterpriseName>S-SHOP</EnterpriseName>
    </HeaderContainer>
  )
}

export default Header;