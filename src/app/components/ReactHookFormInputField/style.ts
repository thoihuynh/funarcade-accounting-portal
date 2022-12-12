import styled from 'styled-components';

export const Wrapper = styled.div`
  .input_wrap {
    border-radius: 8px;
    position: relative;
    margin-bottom: 16px;

    .form-input {
      width: 100%;
      background: var(--global--background-color-2);
      transition: all 0.5s;
      border: 2px solid var(--global--background-color-2);
      height: 40px;
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
      color: white;
      font-size: 14px;
      padding: 0 36px 0 12px;
      width: 100%;

      &:focus-within {
        border: 2px solid var(--global--background-color-3);
      }
    }

    .form-input.is-invalid {
      border: 2px solid #ed3453;
    }

    .invalid-feedback {
      font-weight: var(--font-weight-medium);
      font-size: 10px;
      line-height: 18px;
      text-align: center;
      color: #ed3453;

      position: absolute;
      right: 0;
      top: 4px;
    }

    .view-password {
      position: absolute;
      right: 0;
      top: 50%;
      :hover {
        cursor: pointer;
      }
      svg {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        margin-right: 12px;
        g {
          fill: #ffff;
        }
      }
    }
    .right-text-or-icon {
      position: absolute;
      right: 12px;
      margin-top: 4px;
      top: 50%;
      font-weight: 700;
    }
  }
`;
