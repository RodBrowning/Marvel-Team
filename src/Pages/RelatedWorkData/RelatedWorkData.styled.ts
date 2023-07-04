import styled from 'styled-components'

export const RelatedWorkDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  margin-top: 4rem;
  padding-bottom: 2rem;
  > img {
    grid-column: 1 / 4;
    width: 100%;
    margin-inline: auto;
    transition: all 0.25s ease-in-out;
    &:hover {
      filter: brightness(130%);
      scale: 1.01;
    }
  }
  @media (prefers-color-scheme: dark) {
    color: white;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    > img {
      grid-column: 1 / 5;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    > img {
      grid-column: 1 / -1;
      width: 50%;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    > img {
      width: 100%;
    }
  }
`
export const RelatedWorkInfo = styled.div`
  grid-column: 4 / 11;

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: var(--regular-text);
    font-weight: 600;
    text-transform: capitalize;
  }
  h1 {
    position: relative;
    font-size: var(--medium-title);
    color: ${({ theme }) => theme.colors.deepBlack};
    line-height: 1.1;
    margin-bottom: 15px;
    font-weight: 400;
  }
  > p {
    line-height: 24px;
    width: 85%;
    font-family: var(--secondary-font-family);
  }
  @media (prefers-color-scheme: dark) {
    h1 {
      color: white;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    grid-column: 5 / 13;
    > p {
      width: 100%;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-column: 1 / -1;
  }
`
export const SideInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    text-align: left;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
  }
`

export const InfoBlock = styled.div`
  margin-bottom: 10px;

  p {
    font-weight: 100;
  }

  p:has(span) {
    margin-bottom: 10px;
    line-height: 1rem;

    span {
      font-size: var(--small-sub-title);
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`

export const Author = styled(InfoBlock)`
  p {
    font-size: var(--big-sub-title);
    margin-bottom: 5px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    p {
      font-size: var(--small-title);
      margin-bottom: 10px;
    }
  }
`

export const DateDisplay = styled(InfoBlock)`
  p {
    font-size: var(--small-title);
  }
`

export const CardsTitle = styled.p`
  position: relative;
  font-size: var(--big-sub-title);
  font-family: var(--primary-font-family);
  color: ${({ theme }) => theme.colors.deepBlack};
  line-height: 2 !important;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 3px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: 0% 100%;
    transform: rotate(45deg);
  }
  &:before {
    top: 0;
    left: clamp(1.625rem, -1.1296rem + 10.3704vw, 2.5rem);
  }
  &:after {
    bottom: 4px;
    left: 0;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* flex-wrap: wrap; */
  gap: clamp(0.375rem, -1.625rem + 4vw, 0.625rem);

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptopL}) {
    grid-template-columns: repeat(3, 1fr);
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

export const BackButtonDiv = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`
