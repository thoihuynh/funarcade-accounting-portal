import { MenuItem } from '@mui/material';
import styled from 'styled-components';
import { HEADER_HEIGHT } from 'utils/constants';

export const LandingPageHeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  background-color: var(--global--background-color);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  padding: 0 var(--padding-lg);
  flex-direction: row;
  flex: 0 0 auto;

  .left-side {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      font-size: var(--font-size-xl);
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
        padding-top: 4px;
        margin-right: var(--margin-sm);
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
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 8px;
    .quick-link-select {
      width: 160px;
      border-radius: var(--border-radius-lg);
      .MuiInputBase-root {
        background-color: #1659d4;
        display: flex;
        border-radius: var(--border-radius-xl);
        font-weight: bold;
        font-size: var(--font-size-md);
        border: none;

        svg {
          right: 16px;
          top: 10px;
        }
      }

      .MuiSelect-select {
        font-size: var(--font-size-sm);
        text-align: center;
      }
    }

    button {
      font-weight: 700;
      font-size: 16px;
      color: #ff9901 !important;
      .icon-btn {
        background: #ff9901;
        border-radius: 50%;
        padding: 0px 5px;
        margin-left: -20px;
        height: 24px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-weight: bold !important;
  font-size: var(--font-size-md) !important;
  height: 40px;
  &:hover {
    background-color: var(--global--button-color) !important;
  }

  img {
    margin-right: var(--margin-sm);
  }
`;
