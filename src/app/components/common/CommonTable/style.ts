import { TableContainer } from '@mui/material';
import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const StyledTable = styled(TableContainer)`
  overflow: hidden;
  padding: 8px;

  .MuiTableCell-head {
    font-weight: bold;
    height: 56px;
  }

  table {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(179, 196, 217, 0.3);
    border-radius: 24px;

    td,
    th {
      padding: 12px 24px;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.DEFAULT};
      font-weight: ${FONT_WEIGHT_STYLES.THIN};
    }

    td,
    th:not(:last-child) {
      border-right: 1px solid rgba(224, 224, 224, 1);
    }

    thead {
      box-shadow: 0px 10px 10px rgba(181, 197, 217, 0.1);
    }

    tbody {
      tr:nth-last-child(1),
      tr:nth-last-child(2) {
        height: 48px;
      }

      tr:nth-last-child(2) {
        box-shadow: 0px -5px 10px rgba(179, 196, 217, 0.2);
      }

      tr:last-child {
        td {
          border-bottom: none;
        }
      }

      tr {
        td: last-child {
          border-right: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hideOnMobile {
      display: none;
    }
  }
`;

export const CommonTablePaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin: 32px 0;

  color: #0f1d44;
  font-size: 16px;
  .page-size {
    min-width: 52px;
  }

  nav {
    li {
      button,
      div {
        border: none;
        background: transparent;
      }
      .Mui-selected {
        background: #5d3eef;
        border-radius: 16px;
        color: #fff;
      }
    }
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 8px;

    .MuiInputBase-root {
      height: 32px;
      background: #5d3eef;
      border-radius: 16px;
      border: none;
      svg {
        top: 4px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;
