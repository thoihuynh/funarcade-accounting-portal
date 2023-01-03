import { Card } from '@mui/material';
import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const HomepageWrap = styled.div`
  height: auto;
  width: 100%;
  .custom_body {
    .MuiContainer-root {
      justify-content: center;
    }
    background-size: cover;
    background-position: center;
  }

  .row {
    justify-content: space-between;
    margin-bottom: 8px;
    .title {
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.LARGE};
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    }

    .reward {
      align-items: end;

      gap: 4px;
      img {
        height: 48px;
      }
      label {
        font-weight: ${FONT_WEIGHT_STYLES.BOLD};
        font-size: ${FONT_SIZE_STYLES.DEFAULT};
        color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
        margin: 0;
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin: 2rem 0;
`;

export const CardWrapper = styled(Card)`
  background: #ffffff;
  min-height: 360px;
  height: 100%;
  &.MuiPaper-root {
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px;
  }

  .content {
    .echarts-for-react {
      height: 280p !important;
      padding: 0 16px 16px 16px;
    }
    .chart-tooltip {
      font-weight: 400;
      font-size: ${FONT_SIZE_STYLES.TINY};
      color: #020069;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px 0 24px;
  transform: translateY(20px);
  .left {
    color: #020069;
    font-weight: 700;

    .row {
      display: flex;
      gap: 8px;
      align-items: baseline;
      justify-content: flex-start;

      .big-title {
        font-size: 32px;
      }

      .currency {
        font-size: 12px;
        text-transform: uppercase;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 56px;
      width: 56px;
    }

    p {
      font-weight: 700;
      font-size: 12px;
      color: #020069;
      align-items: center;
      text-transform: uppercase;
    }
  }
`;

interface PointerCss {
  color: string;
}

export const Pointer = styled.span<PointerCss>`
  background: ${props => props.color};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const TableWrapper = styled.div`
  margin: 2rem 0;
  background: #ffffff;
  border-radius: 32px;

  .MuiPaper-root {
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px !important;
    overflow: hidden;
  }

  table {
    td,
    th {
      padding: 12px 24px;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.SMALL};
      font-weight: ${FONT_WEIGHT_STYLES.THIN};
    }

    thead {
      box-shadow: 0px 10px 10px rgba(181, 197, 217, 0.1);
      th:not(:last-child) {
        border-right: 2px solid #f0f5fa;
      }
      th {
        border-bottom: 2px solid #f0f5fa;
        box-shadow: 0px -5px 10px rgba(179, 196, 217, 0.2);
      }
    }

    tbody {
      th:not(:last-child) {
        border-right: 2px solid #f0f5fa;
      }

      td:not(:last-child) {
        border-right: 2px solid #f0f5fa;
      }
  
      tr:not(:last-child) {
        th,
        td {
          border-bottom: none;
        }
      }
  
      tr:last-child {
        box-shadow: 0px -5px 10px rgba(179, 196, 217, 0.2);
        th,
        td {
          border-top: 2px solid #f0f5fa;
        }

        td {
          font-size: ${FONT_SIZE_STYLES.LARGE};
          font-weight: ${FONT_WEIGHT_STYLES.BOLD};
        }
      }
  }
`;
