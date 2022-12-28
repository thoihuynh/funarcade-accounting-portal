import { createGlobalStyle } from 'styled-components';
import {
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
  }

  .small-title {
    font-size: ${FONT_SIZE_STYLES.DEFAULT} !important;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD} !important;
  }

  .popover-menu {
    >.MuiPaper-root {
      width: 200px;
      border-radius: 24px;
      box-shadow: none;
      left: 200px;
      li {
        height: 48px;
        gap: 8px;
        &:hover {
          cursor: pointer;
          span {
            color: #020069;
          }
          svg {
            path {
              fill: #020069;
            }
          }
        }
      }
      .MuiListItemText-root{
        padding-left:0;
        span {
          font-weight: 700;
          font-size: 16px;
          color: #b7c2e8;
        }
      }
      .MuiListItemIcon-root {
        min-width: auto;
      }

      li.active {
        .MuiListItemText-root{
          span {
            color: #020069;
          }
        }
      }
    }
  }
`;
