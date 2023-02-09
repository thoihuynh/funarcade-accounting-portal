import { Helmet } from 'react-helmet-async';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { HomepageWrap, TableWrapper } from './style';
import CustomBody from 'app/components/CustomBody';

import { Container } from '@mui/system';
import LanguageSelect from 'app/components/LanguageSelect';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';
import { useEffect, useState } from 'react';
import DateRange from 'app/components/DateRange';
import CommonTable from 'app/components/common/CommonTable';
import { NumberWrapper } from 'styles/custom-global-styles';
import SearchInput from 'app/components/SearchInput';
import PreviousIcon from 'app/components/icons/Previous';
import { useNavigate } from 'react-router-dom';

function createData(
  gameName: string,
  gameNumber: string,
  gameDateTime: string,
  betAmountFAT: number,
  betAmountUSDC: number,
  plFAT: number,
  plUSDC: number,
) {
  return {
    gameName,
    gameNumber,
    gameDateTime,
    betAmountFAT,
    betAmountUSDC,
    plFAT,
    plUSDC,
  };
}

const rows = [
  createData(
    'Money Mountain',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    -50,
    0,
  ),
  createData(
    'Hilo',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    100,
    0,
  ),
  createData(
    'Blackjack',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    100,
    0,
  ),
  createData(
    'Dice',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    0,
    -0,
  ),
  createData(
    'Crash',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    -50,
    0,
  ),
  createData(
    'Money Mountain',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    -50,
    0,
  ),
  createData(
    'Hilo',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    100,
    0,
  ),
  createData(
    'Blackjack',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    100,
    0,
  ),
  createData(
    'Dice',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    0,
    -0,
  ),
  createData(
    'Crash',
    '1g28s02h27s9xh3...',
    '30/10/2022 - 20:00:10',
    100,
    0,
    -50,
    0,
  ),
];

const SearchListPage = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  const handleChangeLink = (link: string) => {
    if (!link) {
      navigate({
        pathname: '/',
      });
    } else {
      navigate({
        pathname: '/user-list-search',
        search: `?name=${searchInput}`,
      });
    }
  };

  useEffect(() => {
    //TODO: Update username by id
    setSearchInput('Arthur');
  }, []);

  return (
    <Container>
      <div className="d-flex break-crumb">
        <h3 className="link disabled-text" onClick={() => handleChangeLink('')}>
          Dashboard
        </h3>
        <PreviousIcon />
        <h3
          className="link disabled-text"
          onClick={() => handleChangeLink('user-list-search')}
        >
          User Name Search List
        </h3>
        <PreviousIcon />
        <h3>User History</h3>
      </div>

      <div className="d-flex header-title">
        <div className="title">User History</div>
        <div className="d-flex">
          <SearchInput value={searchInput} disabled />
          <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
        </div>
      </div>

      <HomepageWrap className="full_height_page">
        <Helmet>
          <title>User History</title>
          <meta name="description" content="Home page" />
        </Helmet>

        <CustomBody>
          <div className="d-flex row">
            <div className="d-flex reward">
              <label htmlFor="">User Name: {searchInput}</label>
            </div>
            <DateRange
              clickTypeDate={(value: string) => handleChangeTypeDate(value)}
            />
          </div>

          <TableWrapper>
            <CommonTable
              totalCount={totalCount}
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              loading={false}
            >
              <TableHead>
                <TableRow>
                  <TableCell className="small-title">Game Name</TableCell>
                  <TableCell className="small-title">Game Number</TableCell>
                  <TableCell className="small-title">
                    Game Date & Time
                  </TableCell>
                  <TableCell className="small-title" align="left">
                    Bet amount
                    <br /> (FAT)
                  </TableCell>
                  <TableCell className="small-title" align="left">
                    Bet amount <br />
                    (USDC)
                  </TableCell>
                  <TableCell className="small-title" align="left">
                    User P/L
                    <br />
                    (FAT)
                  </TableCell>
                  <TableCell className="small-title" align="left">
                    User P/L
                    <br />
                    (USDC)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.gameName}>
                    <TableCell>{row.gameName}</TableCell>
                    <TableCell>{row.gameNumber}</TableCell>
                    <TableCell>{row.gameDateTime}</TableCell>

                    <TableCell>
                      <NumberWrapper value={row.betAmountFAT}>
                        {row.betAmountFAT}
                      </NumberWrapper>
                    </TableCell>
                    <TableCell>
                      <NumberWrapper value={row.betAmountUSDC}>
                        {row.betAmountUSDC}
                      </NumberWrapper>
                    </TableCell>
                    <TableCell>
                      <NumberWrapper value={row.plFAT}>
                        {row.plFAT}
                      </NumberWrapper>
                    </TableCell>
                    <TableCell>
                      <NumberWrapper value={row.plUSDC}>
                        {row.plUSDC}
                      </NumberWrapper>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="small-title" align="left" colSpan={3}>
                    Total For This Page:
                  </TableCell>

                  <TableCell className="small-title">
                    <NumberWrapper value={100}>100</NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={0}>0</NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={-100}>-100</NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={100}>100 </NumberWrapper>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="small-title" align="left" colSpan={3}>
                    Total For Selected Date:
                  </TableCell>

                  <TableCell className="small-title">1,234,122</TableCell>
                  <TableCell className="small-title">1,234,122</TableCell>
                  <TableCell className="small-title">834,122</TableCell>
                  <TableCell className="small-title">834,122</TableCell>
                </TableRow>
              </TableBody>
            </CommonTable>
          </TableWrapper>
        </CustomBody>
      </HomepageWrap>
    </Container>
  );
};

export default SearchListPage;
