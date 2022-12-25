import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const HeaderWrap = styled.div`
  width: 100%;

  .row {
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.LARGE};
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    }

    .reward {
      align-items: end;

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

  .search-input {
    margin-right: 20px;
  }
`;
