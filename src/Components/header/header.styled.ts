import styled from 'styled-components'

export const Header = styled.div`
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 40px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: 35px;
  }
`
