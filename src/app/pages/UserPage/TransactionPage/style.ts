import styled from 'styled-components';

export const Wrapper = styled.div`
  .search_box {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 16px;
    overflow: auto;

    .filters {
      display: flex;
      gap: 12px;

      .game_select_input {
        width: 250px;
      }

      .search_input {
        margin-top: auto;
        margin-bottom: 2px;
      }
    }

    .search_btn {
      margin-left: 16px;
    }

    .transaction-type {
      min-width: 160px;
    }
  }

  .table_transaction_wrap {
    .MuiTableCell-root {
      padding: 16px;
    }
    .common-table-pagination {
      nav {
        li {
          .Mui-selected {
            background: transparent;
          }
        }
      }
    }
  }
  min-height: 48px;

  .click-cell {
    max-width: 40px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    &:hover {
      cursor: pointer;
      color: #00c242;
    }
  }
`;
