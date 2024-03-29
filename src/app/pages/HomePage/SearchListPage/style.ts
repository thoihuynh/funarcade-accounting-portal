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
  margin: 20px 0;
  background: ${COLOR_STYLES.WHITE_COLOR};
  border-radius: 16px;

  .MuiPaper-root {
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px !important;
    overflow: hidden;
  }

  table {
    td,
    th,
    a {
      padding: 8px 16px;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.SMALL};
      font-weight: ${FONT_WEIGHT_STYLES.THIN};
    }

    tr:last-child {
      td {
        border-bottom: none;
      }
    }

    td:last-child {
      text-align: right;
    }

    tbody {
      td {
        border-bottom: 1px solid #f0f5fa;
      }
    }
  }
`;
