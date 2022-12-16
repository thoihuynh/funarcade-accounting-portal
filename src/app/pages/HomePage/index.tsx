import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import CustomBody from 'app/components/CustomBody';

import { HomepageWrap, CardWrapper, TableWrapper } from './style';
import 'swiper/css';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { COLOR_STYLES } from 'styles/variables';

const CARD_DATA = [
  {
    title: 'Games P/L',
    value1: '648,721',
    currency1: 'FAT',
    value2: '821,333',
    currency2: 'USDC',
    color: COLOR_STYLES.PURPLE,
  },
  {
    title: 'Lotteries P/L',
    value1: '648,721',
    currency1: 'FAT',
    value2: '821,333',
    currency2: 'USDC',
    color: COLOR_STYLES.GOLD,
  },
  {
    title: 'Sports P/L',
    value1: '648,721',
    currency1: 'FAT',
    value2: '821,333',
    currency2: 'USDC',
    color: COLOR_STYLES.BLUE,
  },
];

function createData(label: string, fat: string, usdc: string) {
  return { label, fat, usdc };
}

const rows = [
  createData('Games 50%', '245,121', '245,121'),
  createData('Lotteries 50%', '645,111', '645,111'),
  createData('Sports 50%', '245,121', '245,121'),
  createData('Total', '1,231,456', '1,231,456'),
];

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <HomepageWrap className="full_height_page">
      <Helmet>
        <title>{t(...messages.homepage())}</title>
        <meta name="description" content={String(t(...messages.homepage()))} />
      </Helmet>

      <CustomBody>
        <div className="big-title">Dashboard</div>
        <div className="cards">
          <Grid container spacing={3}>
            {CARD_DATA.map(card => (
              <Grid item xs={12} md={4}>
                <Grid container direction="column">
                  <Grid item>
                    <CardWrapper color={card.color}>
                      <div className="header">
                        <div className="small-title">{card.title}</div>
                      </div>
                      <div className="content">
                        <div className="item d-flex">
                          <h1>{card.value1} </h1>
                          <p>{card.currency1}</p>
                        </div>
                        <div className="item d-flex">
                          <h1>{card.value2}</h1>
                          <p>{card.currency2}</p>
                        </div>
                      </div>
                    </CardWrapper>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="small-title">FAT Stakers Share</div>
        {/* table */}

        <TableWrapper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="small-title">Product</TableCell>
                  <TableCell className="small-title" align="center">
                    FAT
                  </TableCell>
                  <TableCell className="small-title" align="center">
                    USDC
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    key={row.label}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      className="small-title"
                      component="th"
                      scope="row"
                    >
                      {row.label}
                    </TableCell>
                    <TableCell className="big-title" align="center">
                      {row.fat}
                    </TableCell>
                    <TableCell className="big-title" align="center">
                      {row.usdc}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableWrapper>
      </CustomBody>
    </HomepageWrap>
  );
};

export default HomePage;
