import styled from 'styled-components'

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* flex-wrap: wrap; */
  gap: 18px;

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
