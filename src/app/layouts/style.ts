import styled from 'styled-components';

export const AppPageLayoutWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .app-page-content {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 40px 20px;
    > .MuiContainer-root {
      height: auto;
    }
  }
`;
