import CommonField from '../common/CommonField';
import { HeaderWrap } from './style';
import SearchIcon from 'app/components/icons/SearchIcon';
import { useState } from 'react';
import LanguageSelect from '../LanguageSelect';
import { Container } from '@mui/system';
import RectangleDropdown from '../icons/RectangleDropdown';
import React from 'react';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <HeaderWrap>
      <Container>
        <div className="d-flex row">
          {/* TODO: get text from router */}
          <div className="title">Dashboard</div>
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
