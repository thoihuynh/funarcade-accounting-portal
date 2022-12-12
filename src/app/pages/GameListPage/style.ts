import styled from 'styled-components';

export const GameListWrap = styled.div``;

export const SearchWrap = styled.div`
  display: flex;
  height: 136px;
  background-color: var(--global--background-color-4);
  box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);
  position: relative;
  flex-direction: column;
  color: white;

  .MuiContainer-root {
    height: 100%;
    position: relative;

    .content {
      padding: var(--padding-lg) 0;

      .first-text {
        font-size: var(--font-size-lg);
        margin-bottom: var(--margin-sm);
        font-weight: var(--font-weight-ultraBold);
      }

      .search-input input {
        border-radius: 20px;
        width: 400px;
        height: 40px;
      }
    }

    .mascot-img {
      position: absolute;
      bottom: -13px;
      right: 24px;
    }
  }

  @media (max-width: 768px) {
    .MuiContainer-root {
      .content {
        padding: 24px 0;
        .first-text {
          font-size: 20px;
        }
        .search-input input {
          width: 100%;
        }
      }
    }
  }
`;
