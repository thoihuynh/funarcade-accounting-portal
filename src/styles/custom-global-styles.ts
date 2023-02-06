import styled, { createGlobalStyle } from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
  TRANSITION_TIME,
} from './variables';

export const CustomGlobalStyles = createGlobalStyle`
  :root {
    /* font weight */
    --font-weight-thin: 100;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-ultraBold: 900;

    /* font size */
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;

    /* size */
    --resXXL: 1280px;
    --resXL: 1170px;
    --resL: 992px;
    --resM: 768px;
    --resS: 660px;
    --resXS: 500px;
    --resXXS: 435px;
    --resMin: 320px;

    /* padding */
    --padding-min: 4px;
    --padding-sm: 8px;
    --padding-md: 16px;
    --padding-lg: 24px;
    --padding-xl: 28px;
    --padding-xxl: 32px;

    /* margin */
    --margin-min: 4px;
    --margin-sm: 8px;
    --margin-md: 16px;
    --margin-lg: 24px;
    --margin-xl: 28px;
    --margin-xxl: 32px;

    /* grid */
    --grid-gap-sm: 8px;
    --grid-gap-md: 12px;
    --grid-gap-lg: 16px;
    --grid-gap-xl: 20px;
    --grid-gap-xxl: 24px;

    /* border-radius */
    --border-radius-min: 4px;
    --border-radius-sm: 8px;
    --border-radius-md: 16px;
    --border-radius-lg: 20px;
    --border-radius-xl: 24px;
    --border-radius-xxl: 48px;
    --border-radius-half: 50%;
  }

  button {
    font-size: 14px !important;
    font-weight: var(--font-weight-ultraBold) !important;
  }

  .full-width {
    width: 100% !important;
  }
  
  .highlight-yellow {
    color: #ffe270;
    font-size: 14px!important;
  }

  .MuiMenuItem-root.quick-link-menu-item{
    &:hover{
      background-color: var(--global--button-color) !important;
      border-radius: 20px !important;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
    padding:0;
  }

  .input-copied {
    transition: all ${TRANSITION_TIME}s;
    position: relative;
    &:after{
      content: "Copied";
      position: absolute;
      top: -8px;
      padding: 4px 12px;
      right: 0;
      background-color: var(--global--background-color-2);
      border-radius:12px
    }

    &:before {
      content: "";
      position: absolute;
      top: 20px;
      right: 30px;
      border-width: 6px;
      border-style: solid;
      border-color: var(--global--background-color-2) transparent transparent transparent;
    }
  }

  .custom-position-dialog {
    .MuiDialog-container.MuiDialog-scrollPaper{
      align-items: baseline;
      .MuiDialog-paper{
        margin-top: 80px !important;
      }
    }
  }

  .d-flex {
    display: flex;
    align-items: center;
  }

  .big-title {
    font-size: ${FONT_SIZE_STYLES.LARGE} !important;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD} !important;
    line-height: 1.25;
  }

  .small-title, .small-title span {
    font-size: ${FONT_SIZE_STYLES.DEFAULT} !important;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD} !important;
  }

  .popover-menu {
    >.MuiPaper-root {
      width: 208px;
      border-radius: 24px;
      box-shadow: none;
      left: 200px;
      li {
        height: 48px;
        gap: 8px;

        width: calc(100% - 16px);
        margin: 8px auto;

        border-radius: 24px;


        &:hover {
          background: #edecfb;
        }
      }
      .MuiListItemText-root{
        padding-left:0;
        span {
          font-weight: ${FONT_WEIGHT_STYLES.BOLD};
          font-size: ${FONT_SIZE_STYLES.DEFAULT};
          color: #0f1d44;
        }
      }
      .MuiListItemIcon-root {
        min-width: auto;
      }

      li.active {
        .MuiListItemText-root{
          span {
            color: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
          }
        }
      }
    }
  }

  .header-title {
    justify-content: space-between;
    margin-top: 8px;
    .title {
      color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
      font-size: ${FONT_SIZE_STYLES.LARGE};
      font-weight: ${FONT_WEIGHT_STYLES.BOLD};

      
    }
    @media (min-width: 768px) {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  h3 {
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
  }

  .search-input {
    margin-right: 1rem;

    &.disabled {
      .input_wrap {
        background: #B7C2E8;
      }
    }
  }

  .border-input {
    .input_wrap {
      border: 1px solid #5D3EEF;
    }
  }

  .break-crumb {
    padding-left: 24px;
    padding-right: 24px;

    gap: 8px;
  }

  .disabled-text {
    color: #A6ACD9;
    a {
      color: #A6ACD9;
    }
  }

  .link {
    cursor: pointer;
  }

  .coming-soon {
    font-weight: 700;
    font-size: 10px;
    line-height: 8px;
    text-align: center;
    color: #020069;

    width: 50px;
    padding: 6px;
    background: #B7C2E8;
    border-radius: 20px;
  }

  .highlight-link {
    color: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
  }

  .popover-logo-menu {
    .MuiPaper-root {
      background-color: transparent;
      border-radius: 20px;
      .popover-logo-menu-detail {
        background: #7B61FF;
        padding: 2px 4px;
        color:#FFFFFF;
        font-size: ${FONT_SIZE_STYLES.TINY};
        font-weight: ${FONT_WEIGHT_STYLES.BOLD};
  
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  
`;

interface NumberProps {
  value: number;
}

export const NumberWrapper = styled.span<NumberProps>`
  color: ${props =>
    props.value < 0 ? '#DE1A3A !important' : COLOR_STYLES.TEXT_SECONDARY_COLOR};
`;
