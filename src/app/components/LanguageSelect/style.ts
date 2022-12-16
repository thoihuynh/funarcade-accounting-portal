import { Popover } from '@mui/material';
import styled from 'styled-components';
import { TRANSITION_TIME } from 'styles/variables';

export const LanguageWrap = styled.li`
  list-style: none;

  .lang-wrapper {
    display: flex;
    color: white;
    list-style: none;
    padding-left: var(--padding-sm);
  }

  .icon {
    width: 24px;
    height: 24px;
    background: linear-gradient(
      180deg,
      var(--global--body-color) 0%,
      #327aff 100%
    );
    text-align: center;
    border-radius: 48px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
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
