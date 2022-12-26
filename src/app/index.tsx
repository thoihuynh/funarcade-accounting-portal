import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Backdrop, CircularProgress } from '@mui/material';

import HomePage from './pages/HomePage/Loadable';
import NotFoundPage from './pages/NotFoundPage/Loadable';
// import GameListPage from './pages/GameListPage/Loadable';
import AppPageLayout from './layouts/AppPageLayout';

import appReducer from 'app/redux/reducer';
import appSaga from 'app/redux/sagas';
import { useInjectReducer, useInjectSaga } from '../utils/redux-injectors';
import { APP_TITLE } from 'utils/constants';
import { selectAppLoading, selectToastAlert } from 'app/redux/selectors';

import { CustomGlobalStyles } from 'styles/custom-global-styles';
import 'react-toastify/dist/ReactToastify.css';
import { COLOR_STYLES } from 'styles/variables';
import GameReportPage from './pages/GamePages/Reports';
import GameRewardPage from './pages/GamePages/Rewards';
import { useEffect } from 'react';

const key = 'app';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100vh;
  flex-direction: column;

  .main-content {
    flex: 1 1 auto;
    position: relative;
    overflow-y: auto;
    background: ${COLOR_STYLES.BODY_COLOR};
  }
`;

export function App() {
  useInjectReducer({ key, reducer: appReducer });
  useInjectSaga({ key, saga: appSaga });

  const toastAlert = useSelector(selectToastAlert);
  const appLoading = useSelector(selectAppLoading);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (toastAlert && toast[toastAlert.type]) {
      toast[toastAlert.type](toastAlert.msg, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: toastAlert.theme || 'colored',
      });
    }
  }, [toastAlert]);

  return (
    <AppWrapper>
      <Helmet
        titleTemplate={`%s - ${APP_TITLE}`}
        defaultTitle={APP_TITLE}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content={`A ${APP_TITLE} application`} />
      </Helmet>

      <div className="main-content">
        <Routes>
          <Route element={<AppPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/report" element={<GameReportPage />} />
            <Route path="/games/reward" element={<GameRewardPage />} />
          </Route>

          <Route path="" element={<NotFoundPage />} />
        </Routes>
      </div>

      <ToastContainer />

      <Backdrop open={appLoading} style={{ zIndex: 10000 }}>
        <CircularProgress style={{ color: 'white' }} />
      </Backdrop>

      <GlobalStyle />
      <CustomGlobalStyles />
    </AppWrapper>
  );
}
