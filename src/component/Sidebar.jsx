
import React, { useState, useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Opacity } from '@mui/icons-material';

const Sidebar = ({ onSelectTab }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTab, setSelectedTab] = useState(''); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    onSelectTab(tabName);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="transparent">
        <CDBSidebarHeader prefix={isMobile ? <i className="fa fa-bars fa-large"></i> : null}>
          
          <img src="/logo.png" alt="Logo" width={25} height={25} style={{margin:'0.6vh'}} />
          <img src="/brand.png" alt="Brand" style={{height:'80%', marginLeft:'3vh',marginTop:'0.6vh'}}/>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked" style={{display:'flex'}} onClick={() => handleTabClick('token')}>
            <img src="/token.png" alt="Token Address"  width={20} height={20} style={{marginLeft:'4vh', marginTop:'3vh'}} />
              <CDBSidebarMenuItem>Token Address</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked" style={{display:'flex'}} onClick={() => handleTabClick('pair')}>
            <img src="/pair.png" alt="Pair Address" width={20} height={20} style={{marginLeft:'4vh', marginTop:'3vh'}} />
              <CDBSidebarMenuItem>Pair Address</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'left', marginLeft: '4vh'}}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <img src="/social.png" alt="Socially" />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;