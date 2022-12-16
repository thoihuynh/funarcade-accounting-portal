import styled from 'styled-components';
import { TRANSITION_TIME } from 'styles/variables';
import CrescentMoonIcon from './crescent-moon.svg';

interface CssProps {
  isMute: boolean;
  isDarkTheme: boolean;
}

export const Wrapper = styled.div<CssProps>`
  width: 56px;
  height: 124px;
  background-color: var(--global--background-color-4);
  border-radius: 8px;
  padding: 8px;

  .theme-switch {
    background-color: ${props =>
      props.isDarkTheme ? 'var(--global--background-color)' : 'white'};
    border-radius: 48px;
    width: 40px;
    height: 24px;
    display: flex;
    cursor: pointer;
    padding: 4px;
    align-items: center;
    .icon-wrap {
      background-color: var(--global--button-color);
      border-radius: 48px;
      width: 16px;
      height: 16px;
      margin-left: ${props => !props.isDarkTheme && '16px'};
      transition: margin ${TRANSITION_TIME}s;
      display: flex;
      align-items: center;
      justify-content: center;

      .moon {
        width: 12px;
        height: 12px;
        border-radius: 48px;
        transition: background ${TRANSITION_TIME}s;
        background: ${props =>
          props.isDarkTheme ? `url(${CrescentMoonIcon})` : '#ffe37e'};
      }
    }
  }

  .volume-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon-wrap {
      background-color: var(--global--background-color);
      border-radius: 48px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        transition: background ${TRANSITION_TIME}s;
      }

      .speaker-icon {
        transition: background ${TRANSITION_TIME}s;
        width: 14.5px;
        height: 12px;
      }

      .music-icon {
        transition: background ${TRANSITION_TIME}s;
        width: 12px;
        height: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 46px;

    .theme-switch {
      margin-left: -5px;
    }
  }
`;
