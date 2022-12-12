import styled from 'styled-components';

export const BoxWrap = styled.div`
  background: var(--global--background-color-4);
  box-shadow: 0px 10px 30px rgba(0, 26, 37, 0.5);
  border-radius: 16px;
  color: white;
  font-size: 14px;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .close-btn {
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 14px;

    &:hover {
      svg path {
        stroke: var(--global--background-color-3);
      }
    }
  }

  .box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--global--background-color-2);
    padding: 12px 24px 12px 24px;
    border-radius: 16px 16px 0px 0px;
    font-weight: bold;
    font-size: 16px;

    &.second_header {
      background: none;
      border-bottom: 2px solid var(--global--background-color-2);
    }
  }

  .box-content {
    overflow-y: auto;
    height: 100%;
  }
  .name,
  label {
    font-weight: 600;
  }
  .title {
    font-weight: var(--font-weight-ultraBold);
  }
`;
