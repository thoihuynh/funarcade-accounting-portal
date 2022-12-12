import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import GameGrid from 'app/components/GameGrid';
import CustomBody from 'app/components/CustomBody';
import { GAME_LIST } from 'utils/gameConfig';
import { APP_TITLE } from 'utils/constants';

import { GameListWrap, HomepageWrap } from './style';
import 'swiper/css';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <HomepageWrap className="full_height_page">
      <Helmet>
        <title>{t(...messages.homepage())}</title>
        <meta name="description" content={String(t(...messages.homepage()))} />
      </Helmet>

      <CustomBody>
        <GameListWrap>
          <div className="list">
            <div className="title">{`${APP_TITLE} ${t(
              ...messages.multiplayerGames(),
            )}`}</div>
            <GameGrid gameList={GAME_LIST.filter(x => !x.isSingle)} />
          </div>

          <div className="list">
            <div className="title">{`${APP_TITLE} ${t(
              ...messages.singlePlayerGames(),
            )}`}</div>
            <GameGrid gameList={GAME_LIST.filter(x => x.isSingle)} />
          </div>
        </GameListWrap>
      </CustomBody>
    </HomepageWrap>
  );
};

export default HomePage;
