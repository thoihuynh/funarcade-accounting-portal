import React, { useState, useEffect } from 'react';

import { Route, useParams, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import NotFoundPage from '../NotFoundPage';
import CommonField from 'app/components/common/CommonField';
import SearchIcon from 'app/components/icons/SearchIcon';
import GameGrid from 'app/components/GameGrid';
import CustomBody from 'app/components/CustomBody';
import MascotImage from 'app/images/mascot-1.svg';
import { MULTI_GAME_LIST, SINGLE_GAME_LIST } from 'utils/gameConfig';
import { searchTextFilter } from 'utils/utilFunction';
import { GameProps } from 'app/appTypes';
import { messages } from './messages';

import { GameListWrap, SearchWrap } from './style';

const GameListPage = () => {
  const { t } = useTranslation();
  const { gameTypePath }: any = useParams();
  const [searchInput, setSearchInput] = useState('');
  const [gameList, setGameList] = useState<GameProps[]>([]);

  const isMulti = gameTypePath === 'multiplayer';
  const initList = isMulti ? MULTI_GAME_LIST : SINGLE_GAME_LIST;

  const titleText = isMulti
    ? messages.multiGameTitle()
    : messages.singleGameTitle();

  useEffect(() => {
    const filtered = initList.filter(x =>
      searchTextFilter(x.name, searchInput),
    );
    setGameList(filtered);
  }, [searchInput, isMulti]);

  const GameListComponent = (
    <GameListWrap className="full_height_page">
      <Helmet>
        <title>{t(titleText)}</title>
        <meta name="description" content={String(t(...titleText))} />
      </Helmet>

      <SearchWrap>
        <Container>
          <div className="content">
            <div className="first-text">{t(...titleText)}</div>
            <CommonField
              type="text"
              className="search-input"
              name="search-input"
              leftTextOrIcon={<SearchIcon />}
              value={searchInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
            />
          </div>
          <img
            width="136"
            height="136"
            className="mascot-img hideOnMobile"
            src={MascotImage}
            alt="Mascot"
          />
        </Container>
      </SearchWrap>

      <CustomBody>
        <GameGrid gameList={gameList} />
      </CustomBody>
    </GameListWrap>
  );

  if (!['multiplayer', 'single-player'].includes(gameTypePath))
    return <NotFoundPage />;

  return (
    <Routes>
      <Route path="/" element={GameListComponent} />
      {/* <Route path=":gameSlug/*" element={<GamePage />} /> */}
    </Routes>
  );
};

export default GameListPage;
