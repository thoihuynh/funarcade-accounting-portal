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

  transition: width 350ms ease-out;

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
      margin: 0 2px;
    }

    .MuiListItemText-root {
      padding-left: 4px;
      span {
        display: inline-block;
        font-weight: ${FONT_WEIGHT_STYLES.BOLD};
        font-size: 20px;
      }
    }

    svg {
      path {
        fill: ${COLOR_STYLES.TEXT_MAIN_COLOR_LIGHT};
      }
    }

    .sub-menu-text {
      span {
        font-size: 16px;
        color: #0f1d44;
      }
      svg {
        path {
          fill: #0f1d44;
        }
      }
    }

    &:hover {
      background: #7b61ff;
      color: ${COLOR_STYLES.WHITE_COLOR};
      border-radius: 40px;
      cursor: pointer;
    }
  }

  .sub-item {
    height: 40px;
    gap: 8px;
    &:hover {
      background: #edecfb;
    }
  }

  .toggle-menu-game {
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }

  .collapse-content {
    display: none;
  }

  .collapse-content.active-expand {
    display: block;
    > div {
      background: ${COLOR_STYLES.WHITE_COLOR};
      border-radius: 0 0 24px 24px;
      width: calc(100% - 56px);
      margin: 0 auto;

      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};

      .list-item {
        width: 100%;
        max-width: 100%;
        margin-top: 4px;

        &:hover {
          background: #7b61ff;
          cursor: pointer;
        }
      }

      .list-item.sub-item {
        width: calc(100% - 16px);
        margin: 8px auto;

        svg {
          path {
            fill: #0f1d44;
          }
        }

        &:hover {
          background: #edecfb;
          svg {
            path {
              fill: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
            }
          }

          .MuiListItemText-root {
            span {
              color: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
            }
          }
        }
      }
    }
  }

  .expanded-item.active {
    background: ${COLOR_STYLES.WHITE_COLOR};
    border-radius: 24px 24px 0 0;

    margin-top: 4px;
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};

    &:hover {
      background: ${COLOR_STYLES.WHITE_COLOR};
      border-radius: 24px 24px 0 0;
    }
  }

  .list-item.active {
    background: #ffff;
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
    svg {
      path {
        fill: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      }
    }
    .sub-menu-text {
      span {
        color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
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
  padding: 4px 28px;
  .logo-menu {
    padding-top: 52px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    color: ${COLOR_STYLES.WHITE_COLOR};
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
        fill: #0f1d44;
      }
    }

    &.active {
      svg {
        path {
          fill: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
        }
      }
    }
  }
`;
