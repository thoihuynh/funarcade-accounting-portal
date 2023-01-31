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

export const TableWrapper = styled.div`
  margin: 2rem 0;
  border-radius: 32px;

  .MuiPaper-root {
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px !important;
    overflow: hidden;
  }

  table {
    td,
    th,
    a {
      padding: 12px 24px;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.SMALL};
      font-weight: ${FONT_WEIGHT_STYLES.THIN};
    }

    tr:last-child {
      td {
        border-bottom: none;
      }
    }

    th:not(:last-child) {
      border-right: 2px solid #f0f5fa;
    }

    td:not(:last-child) {
      border-right: 2px solid #f0f5fa;
    }

    td:last-child {
      text-align: right;
    }
  }
`;
