import CommonField from '../common/CommonField';
import { HeaderWrap } from './style';
import SearchIcon from 'app/components/icons/SearchIcon';
import { useState } from 'react';
import LanguageSelect from '../LanguageSelect';
import { Container } from '@mui/system';
import RectangleDropdown from '../icons/RectangleDropdown';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'app/hooks/useQuery';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const { pathname } = useLocation();

  let query = useQuery();

  const getTitle = () => {
    if (pathname === '/') return 'Dashboard';
    if (pathname.includes('games')) return 'Report';
    return '';
  };

  return (
    <HeaderWrap>
      <Container>
        <div className="d-flex row">
          <div className="title">
            {query.get('username')} {getTitle()}
          </div>
          <div className="d-flex">
            <CommonField
              type="text"
              className="search-input"
              name="search-input"
              rightTextOrIcon={<SearchIcon />}
              value={searchInput}
              placeholder="Search by username"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
            />
            <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
          </div>
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
