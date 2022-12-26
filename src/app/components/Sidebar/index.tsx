import { useState } from 'react';
import { SIDE_BAR_MIN_WIDTH, SIDE_BAR_MAX_WIDTH } from 'styles/variables';
// import iconToggle from 'app/images/toggle.svg';
// import logo from 'app/images/icons/icon-app.svg';
import { SidebarNav } from './style';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

import iconHome from 'app/images/icons/home-active.svg';
// import iconMenu from 'app/images/icons/menu-icon.svg';
// import iconClose from 'app/images/icons/icon-up.svg';
// import iconOpen from 'app/images/icons/icon-down.svg';
import iconGame from 'app/images/icons/menu-game.svg';
import iconSport from 'app/images/icons/menu-sport.svg';
import iconLottery from 'app/images/icons/menu-lottery.svg';
import iconReport from 'app/images/icons/menu-report.svg';
import iconReward from 'app/images/icons/menu-reward.svg';
// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  // const navigate = useNavigate();

  const [expandGameMenu, setExpandGameMenu] = useState(true);

  const onToggleExpandGameMenu = () => setExpandGameMenu(!expandGameMenu);

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  // const handleOnClickMenu = (link: string) => {
  //   navigate(`${link}`);
  // };

  return (
    <>
      {/* <SidebarNav
        expand={expand}
        width={expand ? SIDE_BAR_MAX_WIDTH : SIDE_BAR_MIN_WIDTH}
      >
        <>
          <SidebarWrap>
            <div className="logo-menu d-flex">
              <img src={logo} alt="logo" />
              <span>{expand ? 'funarcade' : ''}</span>
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} hideLabel={!expand} />;
            })}
          </SidebarWrap>
          <div className="toggle" onClick={onToggleExpandMenu}>
            <img
              src={iconToggle}
              className={expand ? 'expand' : 'collapse'}
              alt="toggle"
            />
          </div>
        </>
      </SidebarNav> */}
      <SidebarNav
        component="nav"
        disablePadding
        expand={expandGameMenu}
        width={expandGameMenu ? SIDE_BAR_MAX_WIDTH : SIDE_BAR_MIN_WIDTH}
      >
        <ListItem onClick={() => handleClick}>
          <ListItemIcon>
            <img src={iconHome} alt="" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem onClick={handleClick}>
          <ListItemIcon>
            <img src={iconGame} alt="" />
          </ListItemIcon>
          <ListItemText primary="Games" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem onClick={handleClick}>
              <ListItemIcon>
                <img src={iconReport} alt="" />
              </ListItemIcon>
              <ListItemText inset primary="Game Report" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img src={iconReward} alt="" />
              </ListItemIcon>
              <ListItemText inset primary="Reward Points" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem>
          <ListItemIcon>
            <img src={iconLottery} alt="" />
          </ListItemIcon>
          <ListItemText primary="Lotteries" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <img src={iconSport} alt="" />
          </ListItemIcon>
          <ListItemText primary="Sports" />
        </ListItem>

        <div className="toggle" onClick={onToggleExpandGameMenu}></div>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
