import React, { useEffect, useRef, useState } from 'react';
import LanguageSelect from 'app/components/LanguageSelect';
import Close from 'app/components/icons/CloseIcon';
import CommonLink from 'app/components/common/CommonLink';
import DownArrow from 'app/components/icons/DownArrow';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MultiplayerIcon from 'app/images/icons/multiplayer.svg';
import SinglePlayerIcon from 'app/images/icons/single-player.svg';
import ProvablyFairIcon from 'app/images/icons/provably-fair.svg';
import HomeIcon from 'app/images/icons/home-icon.svg';
import SearchIcon from 'app/images/icons/search-icon.svg';
import BellIcon from 'app/images/icons/bell-icon.svg';
import {
  MOBILE_QUERY,
} from 'app/components/../../utils/constants';
import {
  isHideHeader,
} from 'app/components/../../utils/utilFunction';
import { MULTI_GAME_LIST, SINGLE_GAME_LIST } from 'utils/gameConfig';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  setAppPopup,
  getUserWallets,
} from 'app/redux/actions';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip, useMediaQuery } from '@mui/material';
import TransactionIcon from '../icons/TransactionIcon';
import SettingIcon from '../icons/SettingIcon';
import YellowCoinIcon from '../icons/YellowCoinIcon';
import { USER_PATH } from 'app/pages/UserPage/UserLayout';
import {
  HeaderWrap,
  LogoWrap,
  MobileMenu,
} from './style';
import RectangleDropdown from '../icons/RectangleDropdown';
import LogoPopover from './components/LogoPopover';
import GameListNavPopover from './components/GameListNavPopover';

const Header = () => {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // states
  const [elNoti, setElNoti] = useState<null | HTMLElement>(null);
  const [elLogo, setElLogo] = useState<null | HTMLElement>(null);
  const [elNavMenu, setElNavMenu] = useState<null | HTMLElement>(null);
  const [typeNavMenu, setTypeNavMenu] = useState('');
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState('');
  const [titleMobileMenu, setTitleMobileMenu] = useState(messages.menu);
  const [networkAlert, setNetworkAlert] = useState(false);

  //is used for checking popup is signup
  const [isSignUpPopup, setIsSignUpPopup] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  //variables
  const userMenuList = [
    {
      name: t(...messages.transactions()),
      url: `${USER_PATH}/transaction`,
      icon: TransactionIcon,
    },
    {
      name: t(...messages.gameHistory()),
      url: `${USER_PATH}/game-history`,
      icon: YellowCoinIcon,
    },
    {
      name: t(...messages.settings()),
      url: `${USER_PATH}/settings`,
      icon: SettingIcon,
    },
  ];

  const isMultiNav = typeNavMenu === 'multi';
  const isSingleNav = typeNavMenu === 'single';
  const navLink = isMultiNav ? '/multiplayer' : '/single-player';
  const navGameList = isMultiNav
    ? MULTI_GAME_LIST
    : isSingleNav
    ? SINGLE_GAME_LIST
    : [];

  //events
  const openLogoDropdown = (e: React.MouseEvent<HTMLElement>) => {
    setElLogo(e.currentTarget);
  };

  const closeLogoDropdown = () => {
    setElLogo(null);
  };

  const openNavMenu = (e: React.MouseEvent<HTMLLIElement>, type: string) => {
    setTypeNavMenu(type);
    setElNavMenu(e.currentTarget);
  };

  const closeNavMenu = () => {
    setElNavMenu(null);
  };

  const onExitedNavMenu = () => {
    setTypeNavMenu('');
  };

  const clickNavLink = () => {
    closeNavMenu();
  };

  const clickLogo = () => {
    isMobile ? setOpenMobileMenu('menu') : navigate('/games');
  };

  const backToLandingPage = () => {
    navigate('/');
  };

  const doLogout = () => {
    closeProfileMenu();
    setOpenLogout(false);
  };

  const closeProfileMenu = () => {
    setOpenProfileMenu(false);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu('');
  };

  const toggleSearchDialog = () => {
    setOpenSearch(!openSearch);
  };

  // side effects
  useEffect(() => {
    const title =
      openMobileMenu === 'noti'
        ? messages.notification
        : openMobileMenu === 'search'
        ? messages.search
        : messages.menu;
    setTitleMobileMenu(title);
  }, [openMobileMenu]);

  if (isHideHeader(location.pathname)) {
    return <></>;
  }

  return (
    <>
      <HeaderWrap>
        <div className="left-side">
          <LogoWrap onClick={clickLogo}>
            <div className="icon">F</div>
            <div className="text">
              Fun<span className="highlight">arcade</span>
              <br />
              <div className="sub-title">Games</div>
            </div>
          </LogoWrap>
          <div className="rectangle-dropdown" onClick={openLogoDropdown}>
            <RectangleDropdown />
          </div>

          {Boolean(elLogo) && (
            <LogoPopover
              elLogo={elLogo}
              closeLogoDropdown={closeLogoDropdown}
              clickLogo={backToLandingPage}
            />
          )}

          <nav>
            <ul>
              <li onClick={e => openNavMenu(e, 'multi')}>
                <Tooltip title={t(...messages.multiplayer()) + ''}>
                  <div
                    className={`icon_wrap ${
                      typeNavMenu === 'multi' ? 'active' : ''
                    }`}
                  >
                    <img
                      alt="Multiplayer Icon"
                      width="24"
                      height="24"
                      src={MultiplayerIcon}
                    />
                  </div>
                </Tooltip>
              </li>
              <li onClick={e => openNavMenu(e, 'single')}>
                <Tooltip title={t(...messages.singlePlayer()) + ''}>
                  <div
                    className={`icon_wrap ${
                      typeNavMenu === 'single' ? 'active' : ''
                    }`}
                  >
                    <img
                      alt="Single Player Icon"
                      width="24"
                      height="24"
                      src={SinglePlayerIcon}
                    />
                  </div>
                </Tooltip>
              </li>
              <li onClick={() => navigate('/user/provably-fair')}>
                <Tooltip title={t(...messages.provablyFair()) + ''}>
                  <div className="icon_wrap">
                    <img
                      alt="Provably Fair Icon"
                      width="24"
                      height="24"
                      src={ProvablyFairIcon}
                    />
                  </div>
                </Tooltip>
              </li>
              <li onClick={toggleSearchDialog}>
                <Tooltip title={t(...messages.search()) + ''}>
                  <div className="icon_wrap">
                    <img
                      alt="Search Icon"
                      width="24"
                      height="24"
                      src={SearchIcon}
                    />
                  </div>
                </Tooltip>
              </li>
            </ul>

            {Boolean(elNavMenu) && (
              <GameListNavPopover
                elNavMenu={elNavMenu}
                navGameList={navGameList}
                navLink={navLink}
                onExitedNavMenu={onExitedNavMenu}
                closeNavMenu={closeNavMenu}
                clickNavLink={clickNavLink}
              />
            )}
          </nav>
        </div>
        <div className="right_side">
        </div>

      </HeaderWrap>


      {isMobile && (
        <Drawer
          anchor="left"
          open={Boolean(openMobileMenu)}
          onClose={closeMobileMenu}
          style={{ zIndex: 1400 }}
          PaperProps={{
            elevation: 0,
            style: { backgroundColor: 'transparent', zIndex: 1201 },
          }}
        >
          <MobileMenu>
            <div className="header">
              <div className="title">{t(...titleMobileMenu)}</div>
              <div className="close-btn" onClick={closeMobileMenu}>
                <Close />
              </div>
            </div>

            {openMobileMenu === 'menu' && (
              <ul className="menu">
                <CommonLink className="logo" to="/games">
                  <li className="menu-mobile-item" onClick={closeMobileMenu}>
                    <img
                      alt="Home Icon"
                      width="24"
                      height="24"
                      src={HomeIcon}
                    />
                    {t(...messages.home())}
                  </li>
                </CommonLink>

                <li className="menu-mobile-item">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<DownArrow />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <img
                        alt="Multiplayer Icon"
                        width="24"
                        height="24"
                        src={MultiplayerIcon}
                      />
                      {t(...messages.multiplayer())}
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-game">
                        {MULTI_GAME_LIST.map(game => (
                          <CommonLink key={game.url} to={game.url}>
                            <li
                              className="global_transition"
                              key={game.url}
                              onClick={closeMobileMenu}
                            >
                              <img
                                src={game.icon}
                                alt={game.name}
                                width="24"
                                height="24"
                              />
                              <span>{game.name}</span>
                            </li>
                          </CommonLink>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </li>

                <li className="menu-mobile-item">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<DownArrow />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <img
                        alt="Single Player Icon"
                        width="24"
                        height="24"
                        src={SinglePlayerIcon}
                      />
                      {t(...messages.singlePlayer())}
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-game">
                        {SINGLE_GAME_LIST.map(game => (
                          <li
                            className="global_transition"
                            key={game.url}
                            onClick={closeMobileMenu}
                          >
                            <CommonLink to={game.url}>
                              <img
                                src={game.icon}
                                alt={game.name}
                                width="24"
                                height="24"
                              />
                              <span>{game.name}</span>
                            </CommonLink>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </li>

                <li className="menu-mobile-item" onClick={closeMobileMenu}>
                  <CommonLink className="logo" to="/user/provably-fair">
                    <img
                      alt="Provably Fair Icon"
                      width="24"
                      height="24"
                      src={ProvablyFairIcon}
                    />
                    {t(...messages.provablyFair())}
                  </CommonLink>
                </li>
                <li
                  className="menu-mobile-item"
                  onClick={() => {
                    toggleSearchDialog();
                    setOpenMobileMenu('search');
                  }}
                >
                  <CommonLink className="logo" to="/">
                    <img
                      alt="Search Icon"
                      width="24"
                      height="24"
                      src={SearchIcon}
                    />
                    {t(...messages.search())}
                  </CommonLink>
                </li>
                <li
                  className="menu-mobile-item"
                  onClick={() => setOpenMobileMenu('noti')}
                >
                  <CommonLink className="logo" to="/">
                    <img
                      alt="Notification Icon"
                      width="24"
                      height="24"
                      src={BellIcon}
                    />
                    {t(...messages.notification())}
                  </CommonLink>
                </li>
                <li className="menu-mobile-item">
                  <LanguageSelect showText />
                </li>
              </ul>
            )}
            
          </MobileMenu>
        </Drawer>
      )}
    </>
  );
};

export default Header;
