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
`;

export const CardContainer = styled.div`
  margin: 1.5rem 0;
`;

export const CardWrapper = styled(Card)`
  background: #ffffff;
  height: 320px;

  &.MuiPaper-root {
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px;
  }
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
