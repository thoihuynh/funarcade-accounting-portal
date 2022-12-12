import { createGlobalStyle } from 'styled-components';
import { TRANSITION_TIME } from 'utils/constants';

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

  .custom-btn-submit {
    text-transform: none !important;
    padding: 12px 12px !important;
    width: 160px;
    height: 40px;
    font-weight: var(--font-weight-ultraBold);
    font-size: 16px;
    color: white !important;
    background-color: var(--global--background-color-3) !important;
    border-radius: 24px !important;
    border: none;
    justify-content: center;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    &:hover {
      filter: brightness(85%);
    }
  
    &.glow {
      animation: glowBackground 0.7s infinite alternate;
      @keyframes glowBackground {
        0% {
          filter: brightness(70%);
        }
        100% {
          filter: brightness(100%);
        }
      }
    }
    :hover {
      cursor: pointer;
    }
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

  .error-text {
    font-weight: 400;
    font-size: 12px;
    color: #ed3453;
  }

  .custom-position-dialog {
    .MuiDialog-container.MuiDialog-scrollPaper{
      align-items: baseline;
      .MuiDialog-paper{
        margin-top: 80px !important;
      }
    }
  }
`;
