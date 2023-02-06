import { useState } from 'react';
import { SIDE_BAR_MIN_WIDTH, SIDE_BAR_MAX_WIDTH } from 'styles/variables';
import iconToggle from 'app/images/toggle.svg';
import { HoverMenu, SidebarNav, ToggleWrapper } from './style';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

import iconClose from 'app/images/icons/icon-up.svg';
import iconOpen from 'app/images/icons/icon-down.svg';

import { useLocation, useNavigate } from 'react-router-dom';
import IconMenuHome from '../icons/menu-home';
import IconMenuSport from '../icons/menu-sport';
import IconMenuLottery from '../icons/menu-lottery';
import IconMenuReport from '../icons/menu-report';
import IconMenuReward from '../icons/menu-reward';
import IconMenuGame from '../icons/menu-game';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [expandMenuGame, setExpandMenuGame] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const onToggleExpandSidebar = () => setToggleSidebar(!toggleSidebar);

  const handleClickMenu = (link: string) => {
    if (link !== '/games/report' && link !== '/games/reward') {
      setExpandMenuGame(false);
    } else {
      setExpandMenuGame(expandMenuGame);
    }
    navigate(`${link}`);
  };

  const handlePopoverGameOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverGameClose = () => {
    setAnchorEl(null);
  };

  const checkMenuItemActive = (link: string) => {
    let currentLink = '';
    if (pathname.includes('user-list-search')) {
      currentLink = '/';
    } else if (pathname.includes('games/report')) {
      currentLink = '/games/report';
    } else if (pathname.includes('games/reward')) {
      currentLink = '/games/reward';
    }
    return pathname === link || currentLink === link ? 'active' : '';
  };

  const handleClickGame = (link: string) => {
    navigate('/games/report');
    setExpandMenuGame(!expandMenuGame);
  };

  const expandMenu = () =>
    checkMenuItemActive('/games/report') === 'active' ||
    checkMenuItemActive('/games/reward') === 'active';

  return (
    <>
      <SidebarNav
        component="nav"
        disablePadding
        expand={toggleSidebar}
        width={toggleSidebar ? SIDE_BAR_MAX_WIDTH : SIDE_BAR_MIN_WIDTH}
      >
        <SidebarHeader
          toggleSidebar={toggleSidebar}
          handleClickMenu={(value: string) => handleClickMenu(value)}
        />

        <ListItem
          className={`list-item ${checkMenuItemActive('/')}`}
          onClick={() => handleClickMenu('')}
        >
          <ListItemIcon>
            <IconMenuHome />
          </ListItemIcon>
          {toggleSidebar && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem
          className={`list-item ${
            expandMenuGame && toggleSidebar ? 'expanded-item' : ''
          } ${
            checkMenuItemActive('/games/report') ||
            checkMenuItemActive('/games/reward')
          }`}
          onMouseEnter={handlePopoverGameOpen}
          onMouseLeave={handlePopoverGameClose}
          onClick={() => handleClickGame('/games/report')}
        >
          <ListItemIcon onClick={() => handleClickGame('/games/report')}>
            <IconMenuGame />
          </ListItemIcon>
          {toggleSidebar && (
            <>
              <ListItemText primary="Games" />
              <img
                src={expandMenuGame ? iconClose : iconOpen}
                alt=""
                className="toggle-menu-game"
              />
            </>
          )}
          {!toggleSidebar && (
            <HoverMenu
              style={{ zIndex: 1401 }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              onClose={handlePopoverGameClose}
              className="popover-menu"
            >
              <ListItem
                className={`list-item sub-item ${checkMenuItemActive(
                  '/games/report',
                )}`}
                onClick={() => handleClickMenu('games/report')}
              >
                <ListItemIcon>
                  <IconMenuReport />
                </ListItemIcon>
                <ListItemText
                  className="sub-menu-text"
                  inset
                  primary="Game Report"
                />
              </ListItem>
              <ListItem
                className={`list-item sub-item ${checkMenuItemActive(
                  '/games/reward',
                )}`}
                onClick={() => handleClickMenu('games/reward')}
              >
                <ListItemIcon>
                  <IconMenuReward />
                </ListItemIcon>
                <ListItemText
                  className="sub-menu-text"
                  inset
                  primary="Reward Points"
                />
              </ListItem>
            </HoverMenu>
          )}
        </ListItem>

        {toggleSidebar && (
          <Collapse
            in={expandMenu()}
            timeout="auto"
            unmountOnExit
            className={`collapse-content ${
              expandMenuGame
                ? checkMenuItemActive('/games/report') ||
                  checkMenuItemActive('/games/reward')
                : ''
            }-expand`}
          >
            <List component="div" disablePadding>
              <ListItem
                className={`list-item sub-item ${checkMenuItemActive(
                  '/games/report',
                )}`}
                onClick={() => handleClickMenu('/games/report')}
              >
                <ListItemIcon>
                  <IconMenuReport />
                </ListItemIcon>
                {toggleSidebar && (
                  <ListItemText
                    className="sub-menu-text"
                    inset
                    primary="Game Report"
                  />
                )}
              </ListItem>
              <ListItem
                className={`list-item sub-item ${checkMenuItemActive(
                  '/games/reward',
                )}`}
                onClick={() => handleClickMenu('/games/reward')}
              >
                <ListItemIcon>
                  <IconMenuReward />
                </ListItemIcon>
                {toggleSidebar && (
                  <ListItemText
                    className="sub-menu-text"
                    inset
                    primary="Reward Points"
                  />
                )}
              </ListItem>
            </List>
          </Collapse>
        )}

        <ListItem
          className={`list-item`}
          // className={`list-item ${checkMenuItemActive('/lotteries')}`}
          // onClick={() => handleClickMenu('/lotteries')}
        >
          <ListItemIcon>
            <IconMenuLottery />
          </ListItemIcon>
          {toggleSidebar && (
            <>
              <ListItemText primary="Lotteries" />
              <span className="coming-soon">Coming soon</span>
            </>
          )}
        </ListItem>

        <ListItem
          className={`list-item`}
          // className={`list-item ${checkMenuItemActive('/sports')}`}
          // onClick={() => handleClickMenu('/sports')}
        >
          <ListItemIcon>
            <IconMenuSport />
          </ListItemIcon>
          {toggleSidebar && (
            <>
              <ListItemText primary="Sports" />
              <div className="coming-soon">Coming soon</div>
            </>
          )}
        </ListItem>

        <ToggleWrapper onClick={onToggleExpandSidebar}>
          <img
            src={iconToggle}
            className={toggleSidebar ? 'expand' : 'collapse'}
            alt="toggle"
          />
        </ToggleWrapper>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
