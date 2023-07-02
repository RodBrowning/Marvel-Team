import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  height: 250px;
  border: 3px solid ${({ theme }) => theme.colors.deepBlack};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    filter: brightness(130%);
    scale: 1.01;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.deepBlack};
    border-bottom: 0;
    border-right: 0;
    color: ${({ theme }) => theme.colors.deepBlack};
    font-size: var(--medium-sub-title);
    font-weight: bold;
    padding: 5px 20px;
  }

  @media (prefers-color-scheme: dark) {
    border: 3px solid white;
    p {
      border: 3px solid white;
      color: white;
      border-bottom: 0;
      border-right: 0;
    }
  }
`
