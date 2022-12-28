import { List, Popover } from '@mui/material';
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
  flex-shrink: 0;
  background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
  border-radius: 0px 40px 40px 0px;

  min-height: 100vh;
  height: 100%;
  width: ${props => props.width}px;

  transition: width 350ms;

  .list-item {
    height: 64px;
    width: 100%;
    max-width: calc(100% - 56px);

    padding: 8px;
    margin: 4px auto 0 auto;

    border-radius: 40px;
    justify-content: center;

    .MuiListItemIcon-root {
      min-width: auto;
    }

    .MuiListItemText-root {
      padding-left: 4px;
      span {
        font-weight: 700;
        font-size: 24px;
      }
    }

    svg {
      path {
        fill: #b7c2e8;
      }
    }

    .sub-menu-text {
      span {
        font-size: 16px;
        color: #b7c2e8;
      }
    }

    &:hover {
      background: #7b61ff;
      color: #ffffff;
      border-radius: 40px;
      cursor: pointer;
    }
  }

  .sub-item {
    height: 40px;
    gap: 8px;
  }

  .toggle-menu-game {
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }

  .collapse-content {
    display: none;
  }

  .collapse-content.active-expand {
    display: block;
    > div {
      background: #ffffff;
      border-radius: 0 0 24px 24px;
      width: calc(100% - 56px);
      margin: 0 auto;

      color: #020069;

      .list-item {
        width: 100%;
        max-width: 100%;
        margin-top: 4px;

        &:hover {
          background: #7b61ff;
          cursor: pointer;
        }
      }
    }
  }

  .expanded-item.active {
    background: #ffffff;
    border-radius: 24px 24px 0 0;

    margin-top: 4px;
    color: #020069;

    &:hover {
      background: #ffffff;
      border-radius: 24px 24px 0 0;
    }
  }

  .list-item.active {
    background: #ffff;
    color: #020069;
    svg {
      path {
        fill: #020069;
      }
    }
    .sub-menu-text {
      span {
        color: #020069;
      }
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

export const SidebarHeader = styled.div`
  width: 100%;
  padding: 0 28px;
  .logo-menu {
    padding-top: 52px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    color: #ffffff;
    cursor: pointer;

    justify-content: center;
    gap: 16px;

    span {
      font-size: ${FONT_SIZE_STYLES.SMALL};
    }
  }
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  right: -12px;
  top: 60px;
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
`;

export const HoverMenu = styled(Popover)`
  .sub-item {
    svg {
      path {
        fill: #b7c2e8;
      }
    }

    &.active {
      svg {
        path {
          fill: #020069;k
        }
      }
    }
  }
`;
