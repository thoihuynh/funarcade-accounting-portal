import styled from 'styled-components';

interface CssProps {
  width?: number;
}

export const BodyWrap = styled.div<CssProps>`
  background: linear-gradient(
    180deg,
    var(--global--body-color) 0%,
    var(--global--body-color-2) 100%
  );
  flex: 1;
  padding: var(--padding-lg) 0;

  .MuiContainer-root {
    height: unset;
    display: flex;
    max-height: 100%;

    > div {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .MuiContainer-root {
      width: ${props => (props.width ? `${props.width}px` : 'unset')};
      padding: ${props => (props.width ? 0 : '')};
    }
  }

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;
