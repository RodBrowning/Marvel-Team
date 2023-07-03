import styled from 'styled-components'

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: clamp(0.375rem, -5.625rem + 12vw, 1.125rem);

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptopL}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tabletSm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
