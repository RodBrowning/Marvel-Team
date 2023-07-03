import styled from 'styled-components'

export const ComicDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  margin-top: 4rem;
  padding-bottom: 5rem;
  > img {
    grid-column: 1 / 4;
    width: 100%;
    margin-inline: auto;
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
export const ComicInfo = styled.div`
  grid-column: 4 / 11;

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: var(--regular-text);
    font-weight: 600;
  }
  h1 {
    position: relative;
    font-size: var(--medium-title);
    color: ${({ theme }) => theme.colors.deepBlack};
    line-height: 1.5;
    margin-bottom: 30px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  p {
    line-height: 24px;
  }
  @media (prefers-color-scheme: dark) {
    h1 {
      color: white;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    grid-column: 5 / 13;
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
export const Author = styled.div`
  margin-bottom: 10px;
  p {
    font-weight: 100;
    font-size: var(--medium-sub-title);
    margin-bottom: 15px;
  }
  p:has(span) {
    line-height: 2rem;
    margin-bottom: 5px;
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: var(--small-sub-title);
      font-weight: 600;
    }
  }
`
export const DateDisplay = styled.div`
  margin-bottom: 10px;
  p {
    font-size: var(--big-sub-title);
    line-height: 2rem;
  }
  p:has(span) {
    line-height: 2rem;
    margin-bottom: 5px;
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: var(--small-sub-title);
      font-weight: 600;
    }
  }
`

export const CardsTitle = styled.p`
  position: relative;
  font-size: var(--big-sub-title);
  color: ${({ theme }) => theme.colors.deepBlack};
  line-height: 2 !important;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  color: inherit;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: 0% 100%;
    transform: rotate(45deg);
  }
  &:before {
    top: 0;
    left: 40px;
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
  gap: 18px;

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
