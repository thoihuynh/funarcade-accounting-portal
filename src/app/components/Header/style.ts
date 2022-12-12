import { Popover } from '@mui/material';
import styled from 'styled-components';
import { HEADER_HEIGHT, TRANSITION_TIME } from 'utils/constants';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  background-color: var(--global--background-color);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  padding: 0 24px;
  flex-direction: row;
  flex: 0 0 auto;

  .left-side {
    display: flex;
    align-items: center;
    .logo-mobile {
      display: none;
    }
    nav {
      display: flex;
      ul {
        display: inline-flex;
        align-items: center;
        padding-left: 48px;

        li {
          display: flex;
          .icon_wrap {
            display: flex;
            cursor: pointer;
            margin-right: 28px;
            padding: 8px;
            align-items: center;
            border-radius: 48px;
            transition: background-color ${TRANSITION_TIME}s;

            &:hover,
            &.active {
              background-color: var(--global--button-color);
            }
          }
        }
      }
    }
    .rectangle-dropdown {
      &:hover {
        cursor: pointer;
      }
      margin-left: 16px;
      transform: translateY(-8px);

      @media (max-width: 768px) {
        transform: translateY(0);
      }
    }
  }

  .right_side {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    .search-icon svg {
      margin-right: 14px;
      margin-left: 22px;
    }

    .bell-icon svg {
      margin-right: 7px;

      &:hover {
        fill: var(--global--background-color-3);
      }
    }

    .header-avatar {
      object-fit: cover;
      border-radius: 24px;
      margin-left: 16px;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 8px;
    .left-side {
      nav {
        ul {
          padding-left: 16px;
          li {
            .icon_wrap {
              margin-right: 16px;
            }
          }
        }
      }
    }
    .right_side {
      .wallet_select {
        margin-right: 0;
      }
      .header-avatar {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 4px;
    height: ${HEADER_HEIGHT}px;

    .left-side {
      margin-right: 12px;
      nav {
        display: none;
      }
    }

    .right_side {
      .search-icon {
        display: none;
      }
      .bell-icon {
        display: none;
      }
      .language-select {
        display: none !important;
      }

      .header-avatar {
        margin-left: 8px;
      }

      .signup-btn {
        width: 112px;
      }

      .login-btn {
        width: unset;
        background-color: transparent !important;
        box-shadow: none;
        margin-right: -16px;
      }
    }
  }
`;

export const NetworkAlertWrap = styled.div`
  align-items: center;
  background: var(--global--main-color-2);
  display: flex;
  justify-content: center;
  padding: 8px 20px;
  font-size: 14px;
  position: absolute;
  background-color: orange;
  width: 100%;
  right: 0;
  top: ${HEADER_HEIGHT}px;
  z-index: 2;

  .network-name {
    text-transform: uppercase;
  }

  .click_switch {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
    transition: color ${TRANSITION_TIME}s;

    :hover {
      color: lightgreen;
    }
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  .close-btn {
    cursor: pointer;
    margin-left: 16px;
  }
`;

export const NotiMenuWrap = styled(Popover)`
  .MuiPaper-root {
    background-color: var(--global--background-color-2);
    color: white;
    border-radius: 24px;
    margin-top: 4px;

    .noti-container {
      width: 324px;
      padding: 16px;
      font-size: 14px;

      .title {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;

export const GameListNav = styled(Popover)`
  .MuiPopover-paper {
    background-color: var(--global--background-color-4);
    padding: 8px;
    color: white;
    margin-top: 4px;
    min-width: 212px;

    ul {
      font-weight: bold;
      margin: 0;
      padding: 0;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        width: 100%;

        img {
          margin-right: 8px;
        }

        &:hover {
          background-color: var(--global--background-color-3);
        }
      }
    }

    .see-all {
      display: flex;
      justify-content: center;
      cursor: pointer;
      margin-top: 10px;

      svg {
        margin-left: 6px;
      }

      :hover {
        color: var(--global--background-color-3);

        svg path {
          stroke: var(--global--background-color-3);
        }
      }
    }
  }
`;

export const UserMenu = styled.div`
  width: 320px;
  height: 100%;
  background-color: var(--global--background-color-4);
  color: white;
  border-radius: 24px 0px 0px 24px;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  overflow-y: scroll;

  .header {
    position: relative;

    .user {
      font-size: 20px;
      cursor: pointer;
      display: inline-block;

      img {
        margin-right: 12px;
        border-radius: var(--border-radius-half);
        object-fit: cover;
      }

      &:hover {
        color: var(--global--background-color-3);
      }

      .user_address {
        width: 220px;
      }
    }

    .close-btn {
      position: absolute;
      top: -14px;
      right: -14px;
      cursor: pointer;

      &:hover {
        svg path {
          stroke: var(--global--background-color-3);
        }
      }
    }
  }

  ul {
    margin: 0px -24px;
    width: 320px;
    li {
      cursor: pointer;
      width: 320px;
      padding: 8px 24px;
      border-radius: 0 24px 24px 0;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background-color: var(--global--background-color-4);
        color: var(--global--background-color-3);

        /* svg path[fill] {
          fill: var(--global--background-color-3);
        }

        svg path[stroke] {
          stroke: var(--global--background-color-3);
        } */
      }
    }
  }

  .logout_btn {
    cursor: pointer;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: var(--global--background-color-3);

      svg path[fill] {
        fill: var(--global--background-color-3);
      }

      svg path[stroke] {
        stroke: var(--global--background-color-3);
      }
    }
  }
`;

export const MobileMenu = styled.div`
  width: 372px;
  height: 100%;
  background-color: var(--global--background-color-4);
  color: white;
  border-radius: 0 24px 24px 0;
  font-size: 16px;

  .header {
    position: relative;
    background-color: var(--global--background-color);
    border-radius: 0 24px 0 0;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    padding: 24px;

    .title {
      font-weight: 600;
      font-size: 24px;
    }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 14px;
      cursor: pointer;

      &:hover {
        svg path {
          stroke: var(--global--background-color-3);
        }
      }
    }
  }

  ul.menu {
    padding: 0 16px;
    li.menu-mobile-item {
      padding: 12px 0;
      width: 100%;

      &:not(:last-child) {
        border-bottom: 2px solid var(--global--background-color);
      }
      img {
        margin-right: 12px;
      }
    }

    .MuiAccordion-root {
      color: white;
      background-color: transparent;
      box-shadow: none;

      .MuiAccordionSummary-root {
        padding: 0;
        min-height: unset;
        .MuiAccordionSummary-content {
          margin: 0;
        }
        .MuiAccordionSummary-expandIcon {
          padding: 0 12px;
        }
      }

      .MuiAccordionDetails-root {
        padding: 12px 0px 0px;
      }
    }

    .list-game {
      font-weight: bold;
      margin: 0;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        width: 100%;

        img {
          margin-right: 8px;
        }

        :hover {
          background-color: var(--global--background-color-4);
        }
      }
    }
  }

  .notification {
    padding: 0 24px;

    ul {
      padding: 0;
    }
  }
`;

export const ButtonGroupWrapper = styled.div`
  .buttons {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoPopoverWrap = styled(Popover)`
  .MuiPaper-root {
    background-color: var(--global--background-color-2);
    color: white;
    padding: 16px;
    border-radius: 80px;
    left: 8px !important;
    top: 54px !important;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #ffaf38;
    border-radius: var(--border-radius-half);
    font-size: 30px;
    padding-top: 5px;
    margin-right: 8px;
  }

  .text,
  .highlight,
  .icon {
    font-family: 'Black Han Sans', sans-serif !important;
  }

  .text {
    font-size: var(--font-size-lg);
  }

  .highlight {
    color: #ffaf38;
  }
  .sub-title {
    font-weight: 700;
    font-size: 14px;
    margin-top: -8px;
  }

  @media (max-width: 768px) {
    .text {
      display: none;
    }
    .title {
      display: block;
    }
  }
`;
