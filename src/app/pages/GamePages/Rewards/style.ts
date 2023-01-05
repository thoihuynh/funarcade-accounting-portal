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
      align-items: center
      gap: 4px;

      background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
      box-shadow: 0px 10px 20px rgb(179 196 217 / 30%);
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
  }`;
