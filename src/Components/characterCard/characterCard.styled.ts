import styled from 'styled-components'

interface CardProps {
  size?: 'regular' | 'small'
}

export const StyledCard = styled.div<CardProps>`
  position: relative;
  height: ${({ size }) => (size === 'regular' ? '250px' : '150px')};
  border: ${({ size }) => (size === 'regular' ? '3px' : '2px')} solid
    ${({ theme }) => theme.colors.deepBlack};
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
    border: ${({ size }) => (size === 'regular' ? '3px' : '2px')} solid
      ${({ theme }) => theme.colors.deepBlack};
    border-bottom: 0;
    border-right: 0;
    color: ${({ theme }) => theme.colors.deepBlack};
    font-size: var(--medium-sub-title);
    font-weight: bold;
    padding: ${({ size }) => (size === 'regular' ? '6px 20px' : '0 10px')};
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

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    p {
      padding: ${({ size }) => (size === 'regular' ? '6px 6px' : '4px 10px')};
    }
  }
`

StyledCard.defaultProps = {
  size: 'regular',
}
