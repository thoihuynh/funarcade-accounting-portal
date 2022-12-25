import { Popover } from '@mui/material';
import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  TRANSITION_TIME,
} from 'styles/variables';

export const LanguageWrap = styled.li`
  list-style: none;
  background: #ffff;
  height: 48px;
  border-radius: 32px;

  .lang-wrapper {
    display: flex;
    color: white;
    list-style: none;
    padding-left: var(--padding-sm);
  }

  .icon {
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: ${FONT_SIZE_STYLES.DEFAULT};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};

    padding: 16px;
  }

  svg {
    margin-right: 12px;
    path {
      fill: ${COLOR_STYLES.TEXT_MAIN_COLOR};
    }
  }

  .text {
    margin-left: 12px;
  }
`;

export const ListLangWrap = styled(Popover)`
  .MuiPaper-root {
    background-color: var(--global--background-color-2);
    color: white;
    border-radius: 8px;
    border: 2px solid var(--global--button-color);

    ul {
      margin: 0;

      li {
        cursor: pointer;
        padding: 8px;
        transition: background-color ${TRANSITION_TIME}s;
        border-radius: 8px;

        &:hover,
        .active {
          background-color: var(--global--button-color);
        }
      }
    }
  }
`;
