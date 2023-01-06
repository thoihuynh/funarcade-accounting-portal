import CustomBody from 'app/components/CustomBody';
import { Helmet } from 'react-helmet-async';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { GameReportWrapper, NumberWrapper, TableWrapper } from './style';
import iconHexagon from 'app/images/icons/icon-hexagon.svg';

import { useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { Link } from 'react-router-dom';

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

const GamePage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  return (
    <GameReportWrapper>
      <Helmet>
        <title>Game Report Page</title>
        <meta name="description" content="Game report page" />
      </Helmet>

      <CustomBody>
        <div className="d-flex row">
          <div className="d-flex reward">
            <img src={iconHexagon} alt="" />
            <label htmlFor="">
              This is Report of Profit/ Loss <br /> In Your Game Application
            </label>
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
                  Volume
                  <br /> (FAT)
                </TableCell>
                <TableCell className="small-title" align="left">
                  Volume <br />
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
                  <TableCell>
                    <Link to={'/crash'}>{row.gameName}</Link>
                  </TableCell>
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
    </GameReportWrapper>
  );
};

export default GamePage;
