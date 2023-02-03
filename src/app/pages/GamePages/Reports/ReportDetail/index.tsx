import CustomBody from 'app/components/CustomBody';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { GameReportWrapper, NumberWrapper, TableWrapper } from './style';
// import iconCurrency from 'app/images/icons/currencies/FAT.svg';
import { useEffect, useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { useNavigate, useParams } from 'react-router-dom';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';
import LanguageSelect from 'app/components/LanguageSelect';
import SearchInput from 'app/components/SearchInput';
import PreviousIcon from 'app/components/icons/Previous';
import { findGame } from 'utils/gameConfig';

const rows = [
  {
    slugGame: 'cash',
    data: [
      {
        userName: 'Arthur 1',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 2',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 3',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
    ],
  },
  {
    slugGame: 'road',
    data: [
      {
        userName: 'Arthur 21',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 22',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 23',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
    ],
  },
  {
    slugGame: 'hilo',
    data: [
      {
        userName: 'Arthur 31',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 32',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 33',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
    ],
  },
  {
    slugGame: 'blackjack',
    data: [
      {
        userName: 'Arthur 41',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 42',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 43',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
    ],
  },
  {
    slugGame: 'dice',
    data: [
      {
        userName: 'Arthur 51',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 52',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
      {
        userName: 'Arthur 53',
        gameNumber: 'jsyd8392jj...',
        gameDateAndTime: '30/10/2022 - 20:00:10',
        volumeFAT: 10,
        volumeUSDC: 10,
        plFAT: 10,
        plUSDC: 10,
      },
    ],
  },
  {
    slugGame: 'baccarat',
    data: [],
  },
];

const GameReportDetail = () => {
  const { slugGame }: any = useParams();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);
  const [tableData, setTableData] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  const handleOnChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleChangeLink = () => {
    navigate({
      pathname: '/games/report',
    });
  };

  useEffect(() => {
    let _tableData: any[] = [];

    const gameData = rows.find(r => r.slugGame === slugGame);
    if (gameData && gameData.data.length > 0) _tableData = gameData.data;

    if (searchInput)
      _tableData = _tableData.filter(t =>
        t.userName?.toLowerCase().includes(searchInput.toLowerCase()),
      );

    setTableData(_tableData);
  }, [slugGame, searchInput]);

  return (
    <Container>
      <div className="d-flex break-crumb">
        <h3 className="link disabled-text" onClick={handleChangeLink}>
          Game Report
        </h3>
        <PreviousIcon />
        <h3>Game Report - {findGame(slugGame)?.name}</h3>
      </div>

      <div className="d-flex header-title">
        <div className="title">
          {tableData?.length === 0
            ? 'No Result Founded'
            : `Game Report - ${findGame(slugGame)?.name}`}
        </div>

        <div className="d-flex">
          <SearchInput
            value={searchInput}
            onChange={handleOnChangeSearchInput}
          />
          <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
        </div>
      </div>

      <GameReportWrapper>
        <Helmet>
          <title>Game Report</title>
          <meta name="description" content="Game report page" />
        </Helmet>

        <CustomBody>
          <h3>{tableData?.length <= 0 ? 'Try another keyword.' : ''}</h3>

          {tableData?.length > 0 && (
            <>
              <div className="d-flex row">
                {/* <div className="d-flex reward">
                  <img src={iconCurrency} alt="" />
                  <label htmlFor="">
                    This is Report of Profit/ Loss <br /> In Your Game Application
                  </label>
                </div> */}
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
                        P/L(FAT)
                      </TableCell>
                      <TableCell className="small-title" align="left">
                        P/L(USDC)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map(row => (
                      <TableRow key={row.userName}>
                        <TableCell>{row.userName}</TableCell>
                        <TableCell>{row.gameNumber}</TableCell>
                        <TableCell>{row.gameDateAndTime}</TableCell>

                        <TableCell>
                          <NumberWrapper value={row.volumeFAT}>
                            {row.volumeFAT}
                          </NumberWrapper>
                        </TableCell>
                        <TableCell>
                          <NumberWrapper value={row.volumeUSDC}>
                            {row.volumeUSDC}
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
                      <TableCell
                        className="small-title"
                        align="left"
                        colSpan={6}
                      >
                        Total For Selected Date:
                      </TableCell>

                      <TableCell className="small-title">
                        <NumberWrapper value={100}>100</NumberWrapper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </CommonTable>
              </TableWrapper>
            </>
          )}
        </CustomBody>
      </GameReportWrapper>
    </Container>
  );
};

export default GameReportDetail;
