import { TableContainer } from '@mui/material';
import styled from 'styled-components';

export const StyledTable = styled(TableContainer)`
  overflow: hidden;
  .MuiTablePagination-root {
    color: white;
    .MuiSelect-icon {
      color: white;
    }
  }

  .MuiTableCell-root {
    border-color: var(--global--background-color);
    border-width: 2px;
    padding: 8px;
    font-size: 14px;

    &:first-child {
      padding-left: 16px;
    }
    &:last-child {
      padding-right: 16px;
    }
  }

  .MuiTableCell-head {
    color: var(--global--text-color);
    font-weight: bold;
    font-size: 14px;
    background-color: var(--global--background-color-2);
    border: none;
    height: 56px;
  }

  .MuiTableCell-body {
    color: white;
  }

  .verify-btn {
    box-shadow: none;
    border: 2px solid var(--global--background-color-2);
    height: 32px;
    font-size: 14px;
  }

  .result-wheel {
    border-radius: 48px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    margin-bottom: -3px;
  }

  @media (max-width: 768px) {
    .hideOnMobile {
      display: none;
    }
  }

  .common-table-pagination {
    background: #102a51;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    margin-bottom: 48px;
    .page-size {
      min-width: 52px;
    }

    nav {
      li {
        button,
        div {
          border: none;
          background: transparent;
          color: white;
        }
        .Mui-selected {
          background: #1659d4;
        }
      }
    }

    .left-side {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 16px;

      .MuiInputBase-root {
        height: 32px;
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
  }
`;
