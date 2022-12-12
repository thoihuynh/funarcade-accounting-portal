import styled from 'styled-components';

export const HomepageWrap = styled.div`
  height: auto;
  .custom_body {
    .MuiContainer-root {
      justify-content: center;
    }
    background-size: cover;
    background-position: center;
  }
`;

export const GameListWrap = styled.div`
  margin-bottom: 40px;
  .list {
    margin-bottom: var(--margin-xl);
    padding: 0 12px;
    .title {
      font-size: var(--font-size-lg);
      margin-left: var(--margin-min);
      margin-bottom: var(--margin-md);
      color: white;
      font-weight: var(--font-weight-ultraBold);
    }
  }
`;

export const GameCoverWrap = styled.div`
  width: 100%;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1440px) {
    height: 300px;
  }

  @media (max-width: 768px) {
  }
`;
