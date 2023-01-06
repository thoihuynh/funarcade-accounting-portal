import { GameRewardWrapper } from './style';
import CustomBody from 'app/components/CustomBody';
import { Helmet } from 'react-helmet-async';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import iconCurrency from 'app/images/icons/currencies/FAT.svg';
import { useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { TableWrapper } from '../Reports/style';

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
  createData(
    'Arthur',
    '234,122',
    '234,122',
    '234,122',
    'Tier 5 : 2%',
    '10,291',
  ),
];

const GameRewardPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  return (
    <GameRewardWrapper>
      <Helmet>
        <title>Game Reward Page</title>
        <meta name="description" content="Game report page" />
      </Helmet>

      <CustomBody>
        <div className="d-flex row">
          <div className="d-flex">
            <div className="d-flex reward">
              <img src={iconCurrency} alt="" />
              <label htmlFor="">Current Reward Points: 1,000,001</label>
            </div>

            <div className="d-flex incentive">
              <label htmlFor="">Incentive Pool: 1,000 FAT - 800 USDC</label>
            </div>
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
                <TableCell className="small-title">User Name</TableCell>
                <TableCell className="small-title">Volume (FAT)</TableCell>
                <TableCell className="small-title">Volume (USDC)</TableCell>
                <TableCell className="small-title">Total Volume</TableCell>
                <TableCell className="small-title">Tier</TableCell>
                <TableCell className="small-title">Reward Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
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
      </CustomBody>
    </GameRewardWrapper>
  );
};

export default GameRewardPage;
