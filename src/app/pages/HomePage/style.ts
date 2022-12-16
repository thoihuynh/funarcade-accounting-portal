import { Card } from '@mui/material';
import styled from 'styled-components';
import { COLOR_STYLES } from 'styles/variables';

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

  .cards {
    margin: 2rem 0;
  }
`;

interface CssPropsCard {
  color: string;
}

export const CardWrapper = styled(Card)<CssPropsCard>`
  color: ${props => props.color} !important;
  border-radius: 8px !important;
  border: 1px solid #d9e2ec;
  box-shadow: 0px 20px 30px rgb(179 196 217 / 10%) !important;
  .header {
    padding: 16px;

    border-bottom: 1px solid #d9e2ec;
    > div {
    }
  }

  .content {
    padding: 16px;

    .item {
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0;
      }
      p {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin: 2rem 0;
  table {
    td,
    th {
      color: ${COLOR_STYLES.PRIMARY} !important;
    }

    thead {
      box-shadow: 0px 10px 10px rgba(181, 197, 217, 0.1);
      th:not(:last-child) {
        border-right: 1px solid #d9e2ec;
      }
    }

    tbody {
      box-shadow: 0px 10px 10px rgba(181, 197, 217, 0.1);
      th,
      td {
        padding: 8px 16px;
      }

      th:not(:last-child) {
        border-right: 1px solid #d9e2ec;
      }
      td:not(:last-child) {
        border-right: 1px solid #d9e2ec;
      }

      tr:not(:last-child) {
        th,
        td {
          border-bottom: none;
        }
      }

      tr:last-child {
        box-shadow: 0px -10px 10px rgb(181 197 217 / 10%);
        th,
        td {
          border-top: 1px solid #d9e2ec;
        }
      }
    }
  }
`;
