import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const GameRewardWrapper = styled.div`
  .row {
    justify-content: space-between;
    margin-bottom: 8px;
    .title {
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.LARGE};
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    }

    .reward {
      height: 48px;
      align-items: center
      gap: 4px;
      border-radius: 32px;
      padding-right: 16px;

      img {
        height: 48px;
      }
    }

    .incentive {
      align-items: center;
      border-radius: 32px;
      padding: 0 16px;

      label {
        color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      }
    }

    label {
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};
      font-size: ${FONT_SIZE_STYLES.DEFAULT};
      margin: 0 0 0 8px;
    }
  }
`;
