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
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      border-radius: 32px;
      padding-right: 16px;

      img {
        height: 48px;
      }
      label {
        font-weight: ${FONT_WEIGHT_STYLES.BOLD};
        font-size: ${FONT_SIZE_STYLES.DEFAULT};
        margin: 0 0 0 8px;
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin-top: 20px;

  table {
    tbody {
      tr:nth-last-child(1) {
        height: 48px;
      }

      tr:nth-last-child(1) {
        box-shadow: 0px -5px 10px rgba(179, 196, 217, 0.2);
      }
    }
  }
`;
