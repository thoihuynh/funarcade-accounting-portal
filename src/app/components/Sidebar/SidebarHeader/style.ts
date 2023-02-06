import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const Wrapper = styled.div`
  width: 100%;
  padding: 4px 28px;
  .logo-menu {
    padding-top: 52px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    color: ${COLOR_STYLES.WHITE_COLOR};
    cursor: pointer;

    justify-content: center;
    gap: 28px;

    span {
      display: inline-block;
      font-size: ${FONT_SIZE_STYLES.SMALL};
    }
  }
`;
