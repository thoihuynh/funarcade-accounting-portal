import { GameRewardWrapper } from './style';
import CustomBody from 'app/components/CustomBody';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import iconCurrency from 'app/images/icons/currencies/FAT.svg';
import { useEffect, useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { TableWrapper } from '../Reports/style';
import CommonField from 'app/components/common/CommonField';
import SearchIcon from 'app/components/icons/SearchIcon';
import LanguageSelect from 'app/components/LanguageSelect';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';

function createData(
  userName: string,
  volumeFAT: string,
  volumeUSDC: string,
  totalVolume: string,
  tier: string,
  rewardPoint: string,
) {
  return {
    userName,
    volumeFAT,
    volumeUSDC,
    totalVolume,
    tier,
    rewardPoint,
  };
}

const rows = [
  createData(
    'Arthur',
    '234,122',
    '234,122',
    '234,122',
    'Tier 5 : 2%',
    '10,291',
  ),
  createData(
    'Arthur',
    '234,122',
    '234,122',
    '234,122',
    'Tier 5 : 2%',
    '10,291',
  ),
  createData('Huu', '234,122', '234,122', '234,122', 'Tier 5 : 2%', '10,291'),
  createData('Huynh', '234,122', '234,122', '234,122', 'Tier 5 : 2%', '10,291'),
  createData('Thoi', '234,122', '234,122', '234,122', 'Tier 5 : 2%', '10,291'),
];

const GameRewardPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);
  const [searchInput, setSearchInput] = useState('');
  const [tableData, setTableData] = useState<any>();

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  useEffect(() => {
    if (searchInput) {
      const gameData = rows.filter(r =>
        r.userName?.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setTableData(gameData);
    } else {
      setTableData(rows);
    }
  }, [searchInput]);

  return (
    <Container>
      <div className="d-flex header-title">
        <div className="title">
          {tableData?.length === 0 ? 'No Result Founded' : 'Game Reward Points'}{' '}
        </div>

        <div className="d-flex">
          <CommonField
            type="text"
            className={`search-input ${searchInput ? 'border-input' : ''}`}
            name="search-input"
            rightTextOrIcon={<SearchIcon />}
            value={searchInput}
            placeholder="Search by username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
            }}
          />
          <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
        </div>
      </div>
      <GameRewardWrapper>
        <Helmet>
          <title>Game Reward Page</title>
          <meta name="description" content="Game report page" />
        </Helmet>

        <CustomBody>
          <div className="d-flex row">
            <div className="d-flex reward">
              {tableData?.length === 0 ? (
                <label htmlFor="">Try another keyword.</label>
              ) : (
                <>
                  <img src={iconCurrency} alt="" />
                  <div className="incentive">
                    <label htmlFor="">Total Reward Points: 1,000,001</label>
                    <label htmlFor="">
                      Total Incentive Pool: 1,000 FAT - 800 USDC
                    </label>
                  </div>
                </>
              )}
            </div>

            <DateRange
              clickTypeDate={(value: string) => handleChangeTypeDate(value)}
            />
          </div>

          {tableData?.length > 0 && (
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
                    <TableCell className="small-title">User Name</TableCell>
                    <TableCell className="small-title">Volume (FAT)</TableCell>
                    <TableCell className="small-title">Volume (USDC)</TableCell>
                    <TableCell className="small-title">Total Volume</TableCell>
                    <TableCell className="small-title">Tier</TableCell>
                    <TableCell className="small-title">Reward Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map(row => (
                    <TableRow>
                      <TableCell>{row.userName}</TableCell>
                      <TableCell>{row.volumeFAT}</TableCell>
                      <TableCell>{row.volumeUSDC}</TableCell>
                      <TableCell>{row.totalVolume}</TableCell>
                      <TableCell>{row.tier}</TableCell>
                      <TableCell>{row.rewardPoint}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </CommonTable>
            </TableWrapper>
          )}
        </CustomBody>
      </GameRewardWrapper>
    </Container>
  );
};

export default GameRewardPage;
