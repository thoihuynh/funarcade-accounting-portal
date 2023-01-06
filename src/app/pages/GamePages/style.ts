import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const GameReportWrapper = styled.div`
  .row {
    justify-content: space-between;
    margin-bottom: 8px;
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

interface NumberProps {
  value: number;
}

export const NumberWrapper = styled.span<NumberProps>`
  color: ${props =>
    props.value < 0 ? '#DE1A3A' : COLOR_STYLES.TEXT_SECONDARY_COLOR};
`;
