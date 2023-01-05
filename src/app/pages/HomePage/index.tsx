import { Helmet } from 'react-helmet-async';
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
import ReactEcharts from 'echarts-for-react';

import iconHexagon from 'app/images/icons/icon-hexagon.svg';
import iconWheel from 'app/images/icons/icon-wheel.svg';
import iconCup from 'app/images/icons/icon-cup.svg';
import IconHat from 'app/images/icons/hat.svg';

import 'swiper/css';
import {
  HomepageWrap,
  CardWrapper,
  TableWrapper,
  CardContainer,
  CardHeader,
  Pointer,
} from './style';
import CustomBody from 'app/components/CustomBody';
import DateRange from 'app/components/DateRange';
import { COLOR_STYLES } from 'styles/variables';

function createData(label: string, fat: string, usdc: string) {
  return { label, fat, usdc };
}

const rows = [
  createData('Games 50%', '245,121', '245,121'),
  createData('Lotteries 50%', '645,111', '645,111'),
  createData('Sports 50%', '245,121', '245,121'),
  createData('Total', '1,231,456', '1,231,456'),
];

const CURRENCY_COLOR = {
  FAT: COLOR_STYLES.BACKGROUND_MAIN_COLOR,
  USDC: '#00A3FF',
};

const optionChart = {
  // title: {
  //   text: 'Stacked Line',
  // },
  tooltip: {
    trigger: 'axis',
    formatter: params => {
      return `<div class="chart-tooltip">
                P/L: ${params[0].value} ${params[0].seriesName}<br />
                P/L: ${params[1].value}: ${params[1].seriesName}<br />
                Date: 07/10/2022 
                </div>`;
    },
  },
  // legend: {
  //   data: ['FAT', 'USDC'],
  // },
  grid: {
    left: '2%',
    right: '8%',
    bottom: '2%',
    containLabel: true,
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1 - 7', '8 - 14', '15 - 21', '22 - 28', '29 - 31'],
  },
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}k',
      },
    },
  ],
  series: [
    {
      name: 'FAT',
      type: 'line',
      data: [120, 132, 101, 134, 90],
      lineStyle: { color: CURRENCY_COLOR.FAT },
      itemStyle: { color: CURRENCY_COLOR.FAT },
    },
    {
      name: 'USDC',
      type: 'line',
      data: [220, 182, 191, 234, 290],
      lineStyle: { color: CURRENCY_COLOR.USDC },
      itemStyle: { color: CURRENCY_COLOR.USDC },
    },
  ],
};

const HomePage = () => {
  // const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleChangeTypeDate = (type: string) => {
    console.log(type);
  };

  return (
    <HomepageWrap className="full_height_page">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Home page" />
      </Helmet>

      <CustomBody>
        <div className="row d-flex">
          <div className="reward d-flex">
            <img src={IconHat} alt="" />
            <label htmlFor="">
              Welcome To Funarcade <br />
              Accounting Portal
            </label>
          </div>

          <DateRange
            clickTypeDate={(value: string) => handleChangeTypeDate(value)}
          />
        </div>

        <CardContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <CardHeader>
                      <div className="left">
                        <div className="row">
                          <div className="big-title">848,721 </div>
                          <span className="currency">fat</span>
                          <Pointer color={CURRENCY_COLOR.FAT} />
                        </div>
                        <div className="row">
                          <div className="big-title">1,848,721 </div>
                          <span className="currency">usdc</span>
                          <Pointer color={CURRENCY_COLOR.USDC} />
                        </div>
                      </div>

                      <div className="right">
                        <img src={iconHexagon} alt="" />
                        <p>games</p>
                      </div>
                    </CardHeader>

                    <div className="content">
                      <ReactEcharts option={optionChart} />
                    </div>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <CardHeader>
                      <div className="left">
                        <div className="row">
                          <div className="big-title">848,721 </div>
                          <span className="currency">fat</span>
                          <Pointer color={CURRENCY_COLOR.FAT} />
                        </div>
                        <div className="row">
                          <div className="big-title">1,848,721 </div>
                          <span className="currency">usdc</span>
                          <Pointer color={CURRENCY_COLOR.USDC} />
                        </div>
                      </div>

                      <div className="right">
                        <img src={iconWheel} alt="" />
                        <p>lotteries</p>
                      </div>
                    </CardHeader>
                    <div className="content">
                      <ReactEcharts option={optionChart} />
                    </div>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="column">
                <Grid item>
                  <CardWrapper>
                    <CardHeader>
                      <div className="left">
                        <div className="row">
                          <div className="big-title">848,721 </div>
                          <span className="currency">fat</span>
                          <Pointer color={CURRENCY_COLOR.FAT} />
                        </div>
                        <div className="row">
                          <div className="big-title">1,848,721 </div>
                          <span className="currency">usdc</span>
                          <Pointer color={CURRENCY_COLOR.USDC} />
                        </div>
                      </div>

                      <div className="right">
                        <img src={iconCup} alt="" />
                        <p>sports</p>
                      </div>
                    </CardHeader>
                    <div className="content">
                      <ReactEcharts option={optionChart} />
                    </div>
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
