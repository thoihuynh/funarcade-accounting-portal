import CommonField from '../common/CommonField';
import { HeaderWrap } from './style';
import SearchIcon from 'app/components/icons/SearchIcon';
import { useState } from 'react';
import LanguageSelect from '../LanguageSelect';
import RectangleDropdown from '../icons/RectangleDropdown';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <HeaderWrap>
      <div className="left-side">Funarcade Accounting Portal</div>
      <div className="right_side d-flex">
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
    </HeaderWrap>
  );
};

export default Header;
