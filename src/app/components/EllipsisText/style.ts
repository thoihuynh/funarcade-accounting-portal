import styled from 'styled-components';

export interface Props {
  text: string;
  lineNumber: number;
  className?: string;
}

export const TextWrap: any = styled.div`
  ${(props: Props) => `
  span {
    display: -webkit-box;
    -webkit-line-clamp: ${props.lineNumber};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`};
`;
