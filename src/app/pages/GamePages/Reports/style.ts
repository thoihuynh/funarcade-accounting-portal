import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const GameReportWrapper = styled.div`
  .row {
    justify-content: flex-end;
    .title {
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.LARGE};
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    }

    .reward {
      align-items: center
      gap: 4px;
      padding-right: 16px;

      img {
        height: 48px;
      }
      label {
        font-weight: ${FONT_WEIGHT_STYLES.BOLD};
        font-size: ${FONT_SIZE_STYLES.DEFAULT};
        color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
        margin: 0 0 0 8px;
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin-top: 24px;

  table {
    td,
    th {
      padding: 12px 20px;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.SMALL};
      font-weight: ${FONT_WEIGHT_STYLES.THIN};
    }

    thead {
      box-shadow: 0px 10px 10px rgba(181, 197, 217, 0.1);
      th:not(:last-child) {
        border-right: 1px solid #f0f5fa;
      }
      th {
        border-bottom: 1px solid #f0f5fa;
      }
    }

    tbody {
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
  }
`;
