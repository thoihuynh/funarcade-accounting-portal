import styled from 'styled-components';
import { HEADER_HEIGHT, TRANSITION_TIME } from 'utils/constants';

export const Wrapper = styled.div`
  height: calc(100% - ${HEADER_HEIGHT}px);
  background-position: center;
  background-size: cover;

  color: #ffffff;
  .container {
    display: flex;
    gap: 24px;
    max-width: 1152px;
    height: 100%;
    max-height: 720px;
    margin: 0 auto;
    .left {
      width: 200px;
      background: #102a51;
      box-shadow: 0px 4px 20px rgba(0 0 0 25%);
      border-radius: 16px;
      flex-shrink: 0;

      .MuiMenuItem-root.menu-item {
        border-radius: 0px !important;
        height: 40px;
        font-weight: var(--font-weight-bold);
        font-size: 14px;
        &:active {
          background-color: #1659d4 !important;
        }
      }

      li {
        font-weight: var(--font-weight-bold);
        font-size: 14px;
      }

      .menu-item.active {
        transition: background-color ${TRANSITION_TIME}s;
        background-color: #1659d4 !important;
      }
    }
    .right {
      width: 100%;
      background: #1c3964;
      box-shadow: 0px 10px 30px rgba(0 26 37 50%);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      > div {
        width: 100% !important;
        height: 100% !important;
      }
      .custom-field,
      .title,
      button {
        max-width: 352px;
      }
      .deposit_tab,
      .withdraw_tab,
      .balance_tab,
      .staking_tab,
      .reward_tab {
        padding-bottom: 16px;
        .currency_detail {
          .title,
          .title-normal {
            margin-bottom: 16px;
            text-align: left;
          }
        }
      }
      .search_box {
        .filters {
          .MuiFormControl-root,
          .custom-field {
            width: 160px;
          }
          .search_btn {
            width: 160px;
            margin-bottom: 2px;
          }
        }
      }
      button {
        margin: 0;
      }
      .input_wrap {
        max-width: 352px;
      }
    }
    .box-header.second_header {
      height: 48px;
      background: #102a51 !important;
    }
    .box-content {
      .header {
        height: 48px;
        background: #102a51;
        padding: 16px 24px 12px 24px;
      }
    }
    @media (min-width: 768px) {
      .wallet_buttons {
        align-items: flex-start;
      }
    }

    @media (min-width: 1200px) {
      max-height: 800px;
    }
  }

  width: 100%;
  overflow: auto;

  .custom_body {
    min-height: 100%;
  }

  @media (min-width: 768px) {
    padding: var(--padding-lg) var(--padding-min);
  }
`;

export const HeaderBox = styled.div`
  background: #102a51;
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  line-height: 24px;
  border-radius: 16px 16px 0 0;
  padding: 16px 0 10px 20px;
`;

export const MenuContent = styled.div`
  padding: 8px 16px;
  overflow: auto;
  margin: 8px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  background-color: var(--global--background-color-2);
  box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);
  position: relative;
  flex-direction: column;
  color: white;

  .MuiContainer-root {
    height: 80px;
    @media (max-width: 768px) {
      padding: 0 8px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
    font-size: 24px;

    li {
      cursor: pointer;

      &:hover,
      &.active {
        color: #387eff;
      }

      &:not(:first-child):before {
        content: '|';
        margin: 0 16px;
        color: #58708c;
      }
    }
  }

  @media (max-width: 768px) {
    height: 80px;

    ul {
      font-size: 14px;

      li {
        &:not(:first-child):before {
          margin: 0 4px;
        }
      }
    }
  }
`;
