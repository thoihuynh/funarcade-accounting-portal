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
import iconCurrency from 'app/images/icons/currencies/FAT.svg';
import { useEffect, useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { useParams } from 'react-router-dom';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';
import LanguageSelect from 'app/components/LanguageSelect';
import CommonField from 'app/components/common/CommonField';
import SearchIcon from 'app/components/icons/SearchIcon';
import { useNavigate } from 'react-router-dom';

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
  const [searchInput, setSearchInput] = useState<string>(slugGame);

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  useEffect(() => {
    const gameData = rows.find(r => r.slugGame === slugGame);
    if (gameData && gameData.data.length > 0) {
      setTableData(gameData.data);
    }
  }, [slugGame]);

  return (
    <Container>
      <div className="d-flex header-title">
        <div className="title">Game Report Detail</div>
        <div className="d-flex">
          <CommonField
            type="text"
            className="search-input"
            name="search-input"
            rightTextOrIcon={<SearchIcon />}
            value={searchInput}
            placeholder="Search by username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
              navigate({
                pathname: `/games/report/${e.target.value}`,
              });
            }}
          />
          <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
        </div>
      </div>

      <GameReportWrapper>
        <Helmet>
          <title>Game Report Detail</title>
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
                  <TableCell className="small-title" align="left" colSpan={6}>
                    Total For Selected Date:
                  </TableCell>

                  <TableCell className="small-title">
                    <NumberWrapper value={100}>100</NumberWrapper>
                  </TableCell>
                </TableRow>
              </TableBody>
            </CommonTable>
          </TableWrapper>
        </CustomBody>
      </GameReportWrapper>
    </Container>
  );
};

export default GameReportDetail;
