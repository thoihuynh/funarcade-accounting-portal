import { List } from '@mui/material';
import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';
// import { HEADER_HEIGHT } from 'utils/constants';

interface CssPropsNav {
  expand?: boolean;
  width?: number;
  component?: any;
  disablePadding: boolean;
}

export const SidebarNav = styled(List)<CssPropsNav>`
  position: relative;
  width: ${props => props.width}px;
  background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
  border-radius: 0px 80px 80px 0px;
  min-height: 100vh;
  height: 100%;
  transition: width 350ms;

  .toggle {
    position: absolute;
    right: -12px;
    top: 64px;
    background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
    border-radius: 50%;
    transition: all 500ms;

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 12px;
      height: 12px;
    }

    .expand {
      animation: rotating_2 300ms ease-in-out forwards;
    }

    .collapse {
      animation: rotating_1 500ms ease-in-out forwards;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @keyframes rotating_1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes rotating_2 {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
  padding: 0 28px;
  .logo-menu {
    padding-top: 60px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    color: #ffffff;
    cursor: pointer;
    justify-content: center;

    span {
      font-size: ${FONT_SIZE_STYLES.SMALL};
    }
  }
`;
