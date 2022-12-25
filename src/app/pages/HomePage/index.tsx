import { Helmet } from 'react-helmet-async';

import CustomBody from 'app/components/CustomBody';

import {
  HomepageWrap,
  CardWrapper,
  TableWrapper,
  CardContainer,
} from './style';
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
import iconHexagon from 'app/images/icons/icon-hexagon.svg';
// import iconWheel from 'app/images/icons/icon-wheel.svg';
// import iconCup from 'app/images/icons/icon-cup.svg';

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
  return (
    <HomepageWrap className="full_height_page">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Home page" />
      </Helmet>

      <CustomBody>
        <CardContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <div className="header d-flex">
                      <div className="value">
                        <div className="big-text"></div>
                      </div>
                      <img src={iconHexagon} alt="" />
                    </div>
                    <div className="content">{/* chart */}</div>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <div className="header"></div>
                    <div className="content"></div>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <div className="header"></div>
                    <div className="content"></div>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContainer>

        <TableWrapper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="small-title">Products</TableCell>
                  <TableCell className="small-title" align="center">
                    Profit / Loss (FAT)
                  </TableCell>
                  <TableCell className="small-title" align="center">
                    Profit / Loss (USDC)
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
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.usdc}</TableCell>
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
