import { GameRewardWrapper } from './style';
import CustomBody from 'app/components/CustomBody';
import { Helmet } from 'react-helmet-async';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import iconCurrency from 'app/images/icons/currencies/FAT.svg';
import { useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { NumberWrapper, TableWrapper } from '../Reports/style';

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
          <div className="d-flex reward">
            <img src={iconCurrency} alt="" />
            <label htmlFor="">Current Reward Points: 1,000,001</label>
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
                <TableCell className="small-title">Game Date & Time</TableCell>
                <TableCell className="small-title" align="left">
                  Bet amount
                  <br /> (FAT)
                </TableCell>
                <TableCell className="small-title" align="left">
                  Bet amount <br />
                  (USDC)
                </TableCell>
                <TableCell className="small-title" align="left">
                  P/L(FAT)
                </TableCell>
                <TableCell className="small-title" align="left">
                  P/L(USDC)
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
                    <NumberWrapper value={row.plFAT}>{row.plFAT}</NumberWrapper>
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
                  0<NumberWrapper value={0}>0</NumberWrapper>
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
    </GameRewardWrapper>
  );
};

export default GameRewardPage;
