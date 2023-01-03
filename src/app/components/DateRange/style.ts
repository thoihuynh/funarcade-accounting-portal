import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const Wrapper = styled.div`
  .date-btn {
    width: 160px;
    height: 48px;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    border-radius: 32px;
    border: none;
    margin-left: 1em;
    outline: none;

    font-weight: ${FONT_WEIGHT_STYLES.THIN};
    font-size: ${FONT_SIZE_STYLES.DEFAULT};
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    &.active {
      border: 1px solid #5d3eef;
      box-shadow: 0px 10px 20px rgba(179, 196, 217, 0.3);
    }
  }
`;
