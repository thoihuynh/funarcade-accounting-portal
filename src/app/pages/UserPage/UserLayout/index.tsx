import NotFoundPage from 'app/pages/NotFoundPage';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SettingsPage from '../SettingsPage/Loadable';
import TransactionPage from '../TransactionPage/Loadable';
import { Container, MenuItem, useMediaQuery } from '@mui/material';
import { HeaderBox, Wrapper, HeaderWrap } from './style';
import CommonHr from 'app/components/common/CommonHr';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { MOBILE_QUERY } from 'utils/constants';
import CustomBody from 'app/components/CustomBody';

export const USER_PATH = '/user';

const UserLayout = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const menu = [
    {
      label: t(...messages.transaction()),
      path: '/transaction',
    },
    {
      label: t(...messages.gameHistory()),
      path: '/game-history',
    },
    {
      label: t(...messages.settings()),
      path: '/settings',
    },
  ];

  const onClickTab = (path: string) => {
    navigate(USER_PATH + path);
  };

  const renderContent = () => {
    return (
      <Routes>
        <Route path="/transaction/*" element={<TransactionPage />} />
        <Route path="/settings/*" element={<SettingsPage />} />
        <Route path="" element={<NotFoundPage />} />
      </Routes>
    );
  };

  return (
    <Wrapper>
      {/* show in mobile */}
      {isMobile && (
        <>
          <HeaderWrap>
            <Container>
              <ul>
                {menu.map(x => (
                  <li
                    key={x.path}
                    className={`global_transition ${
                      location.pathname.includes(USER_PATH + x.path)
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => onClickTab(x.path)}
                  >
                    {x.label}
                  </li>
                ))}
              </ul>
            </Container>
          </HeaderWrap>

          <CustomBody>{renderContent()}</CustomBody>
        </>
      )}

      {/* show in desktop */}
      {!isMobile && (
        <div className="container">
          <div className="left">
            <HeaderBox>{t(...messages.profileMenu())}</HeaderBox>
            <CommonHr marginBottom={8} color="#58708C" />
            {menu.map(x => (
              <MenuItem
                className={`global_transition menu-item ${
                  location.pathname.includes(USER_PATH + x.path) ? 'active' : ''
                }`}
                key={`level_${x.path}`}
                selected={location.pathname.includes(USER_PATH + x.path)}
                onClick={event => onClickTab(x.path)}
              >
                {x.label}
              </MenuItem>
            ))}
          </div>

          <div className="right">{renderContent()}</div>
        </div>
      )}
    </Wrapper>
  );
};

export default UserLayout;
