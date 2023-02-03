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
// import iconHexagon from 'app/images/icons/icon-hexagon.svg';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TextField } from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import CommonTable from 'app/components/common/CommonTable';
import DateRange from 'app/components/DateRange';
import { Link } from 'react-router-dom';
import LanguageSelect from 'app/components/LanguageSelect';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'app/components/SearchInput';

// interface TableModel {
//   gameName: string;
//   gameNumber: string;
//   gameDateTime: string;
//   betAmountFAT: number;
//   betAmountUSDC: number;
//   plFAT: number;
//   plUSDC: number;
// }

function createData(
  gameName: string,
  slugGame: string,
  category: string,
  volumeFAT: number,
  volumeUSDC: number,
  plFAT: number,
  plUSDC: number,
) {
  return {
    gameName,
    slugGame,
    category,
    volumeFAT,
    volumeUSDC,
    plFAT,
    plUSDC,
  };
}

const rows = [
  createData('Money Mountain', 'road', 'Single Player', 100, 0, -50, 0),
  createData('Hilo', 'hilo', 'Single Player', 100, 0, 100, 0),
  createData('Blackjack', 'blackjack', 'Single Player', 100, 0, 100, 0),
  createData('Dice', 'dice', 'Single Player', 100, 0, 0, -0),
  createData('Crash', 'crash', 'Multiple Player', 100, 0, -50, 0),
];

const GameReportPage = () => {
  // const [value, setValue] = React.useState<Dayjs | null>(null);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(10);
  const [totalItem, setTotalItem] = useState({
    volumeFAT: 0,
    volumeUSDC: 0,
    plFAT: 0,
    plUSDC: 0,
  });

  const [searchInput, setSearchInput] = useState('');

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  const handleOnChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const handleChangeInput = setTimeout(() => {
      if (searchInput) {
        navigate({
          pathname: '/user-list-search',
          search: `?name=${searchInput}`,
        });
      }
    }, 1000);

    return () => clearTimeout(handleChangeInput);
  }, [searchInput]);

  useEffect(() => {
    setTotalItem({
      volumeFAT: 10,
      volumeUSDC: 0,
      plFAT: 12345678,
      plUSDC: 2131222,
    });
  }, []);

  return (
    <Container>
      <div className="d-flex header-title">
        <div className="title">Game Report</div>
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
          <title>Game Report Page</title>
          <meta name="description" content="Game report page" />
        </Helmet>

        <CustomBody>
          <div className="d-flex row">
            {/* <div className="d-flex reward">
              <img src={iconHexagon} alt="" />
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
                  <TableCell className="small-title">Category</TableCell>
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
                      <Link to={`/games/report/${row.slugGame}`}>
                        {row.gameName}
                      </Link>
                    </TableCell>
                    <TableCell>{row.category}</TableCell>

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
                  <TableCell className="small-title" align="left" colSpan={2}>
                    Total For Selected Date:
                  </TableCell>

                  <TableCell className="small-title">
                    <NumberWrapper value={totalItem.volumeFAT}>
                      {totalItem.volumeFAT}
                    </NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={totalItem.volumeUSDC}>
                      {totalItem.volumeUSDC}
                    </NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={totalItem.plFAT}>
                      {totalItem.plFAT}
                    </NumberWrapper>
                  </TableCell>
                  <TableCell className="small-title">
                    <NumberWrapper value={totalItem.plFAT}>
                      {totalItem.plFAT}
                    </NumberWrapper>
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

export default GameReportPage;
