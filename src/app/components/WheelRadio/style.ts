import styled from 'styled-components';
import { TRANSITION_TIME } from 'utils/constants';

const radioSize = 24;
const radioMargin = 40;
const marginLeft = 42;
const leftPX = radioSize + radioMargin;

interface CssProps {
  disabled?: boolean;
}

export const WheelRadioWrap = styled.div<CssProps>`
  position: relative;
  width: 100%;
  filter: ${props => (props.disabled ? 'grayscale(100%)' : 'unset')};
  pointer-events: ${props => (props.disabled ? 'none' : 'unset')};

  input[type='radio'] {
    position: absolute;
    right: 1000%;
  }
  label {
    float: left;
    border: 4px solid #fffef8;
    border-radius: var(--border-radius-half);
    cursor: pointer;
    width: ${radioSize}px;
    height: ${radioSize}px;

    &:first-of-type {
      margin-left: ${marginLeft}px;
    }

    &:not(:last-of-type) {
      margin-right: ${radioMargin}px;
    }
  }

  label[for='input1'] {
    border-color: #e2513d;
  }

  label[for='input2'] {
    border-color: #1cbaff;
  }

  label[for='input3'] {
    border-color: #ffc700;
  }

  #slider {
    display: none;
    position: absolute;
    left: ${marginLeft}px;
    top: 0;
    background: #fffef8;
    width: ${radioSize}px;
    height: ${radioSize}px;
    transition: transform 1s;
    border-radius: var(--border-radius-half);
    animation-timing-function: ease-in-out;
    animation-duration: ${TRANSITION_TIME}s;
    animation-fill-mode: forwards;
    transition: 0.2s all 0.05s ease-in-out;
  }
  #input0:checked {
    & ~ .bar-wrap .arrow,
    & ~ #slider {
      left: ${marginLeft}px;
    }
    & ~ #slider {
      animation-name: inputAnimation;
    }
    & ~ .bar-wrap .bar {
      background-color: #fffef8;
    }
    & ~ .bar-wrap .arrow {
      border-color: #fffef8;
    }
  }
  #input1:checked {
    & ~ .bar-wrap .arrow,
    & ~ #slider {
      left: ${leftPX + marginLeft}px;
    }
    & ~ #slider {
      animation-name: input1;
      background: #e2513d;
    }
    & ~ .bar-wrap .bar {
      background-color: #e2513d;
    }
    & ~ .bar-wrap .arrow {
      border-color: #e2513d;
    }
  }
  #input2:checked {
    & ~ .bar-wrap .arrow,
    & ~ #slider {
      left: ${leftPX * 2 + marginLeft}px;
    }
    & ~ #slider {
      animation-name: inputAnimation;
      background: #1cbaff;
    }
    & ~ .bar-wrap .bar {
      background-color: #1cbaff;
    }
    & ~ .bar-wrap .arrow {
      border-color: #1cbaff;
    }
  }
  #input3:checked {
    & ~ .bar-wrap .arrow,
    & ~ #slider {
      left: ${leftPX * 3 + marginLeft}px;
    }
    & ~ #slider {
      animation-name: inputAnimation;
      background: #ffc700;
    }
    & ~ .bar-wrap .bar {
      background-color: #ffc700;
    }
    & ~ .bar-wrap .arrow {
      border-color: #ffc700;
    }
  }

  input:checked {
    & ~ .bar-wrap .arrow,
    & ~ #slider {
      display: block;
    }
  }

  ${`@keyframes {
  inputAnimation {
    30%,
    70% {
      transform: scale(0.5);
    }
  }
}`}

  .bar-wrap {
    height: 12px;
    margin-top: 42px;
    position: relative;

    .arrow {
      display: none;
      left: ${marginLeft}px;
      margin-left: 8px;
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent !important;
      border-right: 5px solid transparent !important;
      border-bottom: 7px solid #fffef8;
      position: absolute;
      bottom: 12px;
      transition: 0.2s all 0.05s ease-in-out;
    }

    .bar {
      height: 3px;
      background-color: #fffef8;
      transition: 0.2s background-color 0.05s ease-in-out;
    }
  }
`;
