import CommonField from '../common/CommonField';
import { HeaderWrap } from './style';
import SearchIcon from 'app/components/icons/SearchIcon';
import { useState } from 'react';
import LanguageSelect from '../LanguageSelect';
import { Container } from '@mui/system';
import RectangleDropdown from '../icons/RectangleDropdown';
import IconHat from 'app/images/icons/hat.svg';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  // const [, setDateFrom] = useState(
  //   new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
  // );
  // const dateFromChange = (date: string) => {
  //   setDateFrom(date);
  // };

  return (
    <Container>
      <HeaderWrap>
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
        <div className="flex row">
          <div className="reward d-flex">
            {/* <img src={iconCurrency} alt="" />
            <label htmlFor="">Reward points: 50,001</label> */}
            <img src={IconHat} alt="" />
            <label htmlFor="">
              Welcome To Funarcade <br />
              Accounting Portal
            </label>
          </div>
          <div></div>
        </div>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
