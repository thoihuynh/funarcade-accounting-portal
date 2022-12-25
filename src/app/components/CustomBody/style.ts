import styled from 'styled-components';

interface CssProps {
  width?: number;
}

export const BodyWrap = styled.div<CssProps>`
  padding: var(--padding-lg) 0;
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
