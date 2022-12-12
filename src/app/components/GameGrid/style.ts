import styled from 'styled-components';

export const GameList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 160px);
  gap: 16px;
  transition: all 0.2s ease-in-out;

  img {
    border-radius: var(--border-radius-md);
    box-shadow: 0px 10px 30px rgba(38, 62, 147, 0.3);
    &:hover {
      transform: scale(1.1);
    }
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto auto;
    justify-items: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
