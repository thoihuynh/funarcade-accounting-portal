import styled from 'styled-components';
import { COLOR_STYLES, HEADER_HEIGHT } from 'styles/variables';

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
    font-style: normal;
    font-weight: 700;
    font-size: 24px;

    align-items: center;
    justify-content: center;
    display: flex;

    color: ${COLOR_STYLES.WHITE};
  }

  .right_side {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    .search-input {
      border: 1px solid #c8d7e5;
      border-radius: 8px;

      .input_wrap {
        background: #0f2743;
      }
    }

    .lang-wrapper {
      .icon {
        background: none;
        font-weight: 700;
        font-size: 1em;
      }
    }
    span {
      svg {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        margin-left: 4px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;
